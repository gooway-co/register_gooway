"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Carousel } from "../components/carousel";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";
import SimpleMap from "../components/SimpleMap";
import CategoriesWrap from "../components/categoriesWrap";
import LoadingOverlay from "../components/loading";
import { Link } from 'react-router-dom';
import { translations } from "../../translations";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { fetchCategories } from "../services/category.service";
import { generateSecurePassword } from "../services/password.service";
import { Toaster, toast } from 'react-hot-toast'
import swal from 'sweetalert';
import API_URL from "../core/environment";


const carouselSlides = [
  {
    title: {
      en: "Join our network of allies!",
      es: "¡Únete a nuestra red de aliados!",
    },
    description: {
      en: "Sign up today and take your business to new heights by connecting with a wide audience looking for the best of what you have to offer.",
      es: "Regístrate hoy y lleva tu negocio a nuevas alturas, conectando con una amplia audiencia que busca lo mejor de lo que tienes para ofrecer.",
    },
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/694d0d7/2147483647/strip/false/crop/1515x1000+0+0/resize/1486x981!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG",
  },
  {
    title: {
      en: "Make quick and easy reservations.",
      es: "Facilita reservas rápidas y sencillas",
    },
    description: {
      en: "As an ally, you will have access to a platform that allows your customers to make reservations quickly and easily.",
      es: "Como aliado, tendrás acceso a una plataforma que permite a tus clientes hacer reservas de manera rápida y sencilla.",
    },
    image:
      "https://media.staticontent.com/media/pictures/9495889e-54f9-40d2-939d-b04bf30b47c7",
  },
  {
    title: {
      en: "Smart data for your business",
      es: "Datos inteligentes para tu negocio",
    },
    description: {
      en: "Analyze, optimize, and grow with our analytics tool. Clear data for faster and more effective decisions.",
      es: "Analiza, optimiza y crece con nuestra herramienta de analítica. Datos claros para decisiones más rápidas y efectivas.",
    },
    image:
      "https://mediaim.expedia.com/destination/1/8c291674f2c8106df6e67ae3edb87da5.jpg",
  },
];

function SignUpPageContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    categoryId:  "",
    businessName: "",
    businessDescription: "",
    businessImages: [] as string[],
    businessLocation: { lat: 0, lng: 0 },
    businessPhone: "",
    businessEmail: "",
  });

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetchCategories();
      setCategories(response.data);
    };

    getCategories();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateStep1();
  };

  const handlePhoneChange = (value: string, country: any, name?: string) => {
    setFormData((prev) => ({ ...prev, [name || "phoneNumber"]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
  
    if (files) {
      // Crear promesas para procesar las imágenes
      const imagePromises = Array.from(files).map((file) => {
        return new Promise<{ file: File; preview: string }>((resolve, reject) => {
          const reader = new FileReader();
  
          reader.onload = () => {
            if (reader.result) {
              resolve({
                file: file, // Guardar el archivo original
                preview: reader.result as string, // Generar la vista previa en base64
              });
            } else {
              reject(new Error("No se pudo leer el archivo."));
            }
          };
  
          reader.onerror = () => {
            reject(new Error("Error al cargar el archivo."));
          };
  
          reader.readAsDataURL(file); // Lee el archivo como base64
        });
      });
  
      // Procesar las promesas
      Promise.all(imagePromises)
        .then((newImages) => {
          console.log("Imágenes procesadas:", newImages); // Verifica el resultado
  
          setFormData((prev) => ({
            ...prev,
            businessImages: [...prev.businessImages, ...newImages], // Guardar ambos: file y preview
          }));
        })
        .catch((error) => {
          console.error("Error al procesar las imágenes:", error);
        });
    }
  };
  
  

  const handleImageRemove = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      businessImages: prev.businessImages.filter((_, i) => i !== index),
    }));
  };

  const handleLocationSelect = (lat: number, lng: number) => {
    setFormData((prev) => ({ ...prev, businessLocation: { lat, lng } }));
  };

  const handleCategorySelect = (id: string) => {
    setFormData((prev) => ({ ...prev, categoryId: {id} }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const password = generateSecurePassword(10);
    setIsLoading(true);
  
    // Construir payloads
    const payloadUser = {
      name: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phoneNumber,
      address: formData.address,
      password: password,
    };
  
    const formDataBusiness = new FormData();
    formDataBusiness.append("name", formData.businessName);
    formDataBusiness.append("description", formData.businessDescription);
    formDataBusiness.append("email", formData.businessEmail);
    formDataBusiness.append("phone", formData.businessPhone);
    formDataBusiness.append("categoryId", formData.categoryId.id);
    formDataBusiness.append("longitud", formData.businessLocation.lng.toString());
    formDataBusiness.append("latitud", formData.businessLocation.lat.toString());
  
    // Agregar las imágenes al FormData
    formData.businessImages.forEach((image: { file: File }) => {
      formDataBusiness.append("images", image.file);
    });
  
    try {
      // Crear usuario administrador
      const responseUser = await axios.post(`${API_URL}/users/register`,
        payloadUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if ([400].includes(responseUser.status)) {
        toast.error(error.response.data.menssage);
        return;
      }
  
      if ([200, 201].includes(responseUser.status)) {
        formDataBusiness.append("userAdminId", responseUser.data.data[0]._id);
        const responsePartner = await axios.post(`${API_URL}/partners/createPartner`,
          formDataBusiness,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
  
        if ([200, 201].includes(responsePartner.status)) {

          swal({
            title: `${t.registerSuccess}`,
            text: `${t.menssageRegistro1} ${responseUser.data.data[0].email}. ${t.menssageRegistro2}`,
            icon: "success",
            buttons: {
              ok: {
                text: "Aceptar",
                value: true,
              },
            },
          }).then((ok) => {
            if (ok) {
              setStep(1); // Vuelve al paso inicial
              setFormData({}); // Limpia los datos del formulario (ajusta según tu estructura inicial de formData)
            }
          });
                 

        } else {
          toast.error(t.failedToCreatePartner);
        }
        setIsLoading(false)
      } else {
        setIsLoading(false);
        toast.error(t.formSubmitError);
      }
    } catch (error: any) {

      setIsLoading(false);
      toast.error(error.response.data.message);
      
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      validateStep1();
    }
  }, [language]);

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.businessName.trim())
      newErrors.businessName = t.businessRequired;

    if (!formData.businessDescription.trim()) {
      newErrors.businessDescription = t.businessDescriptionRequired;
    } else if (formData.businessDescription.trim().length < 100){
      newErrors.businessDescription = t.businessDescriptionLengthError; // Mensaje para la longitud inválida

    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = t.businessEmailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      // Cambié formData.email por formData.businessEmail
      newErrors.businessEmail = t.invalidEmail;
    }
    if (!formData.businessPhone.trim())
      newErrors.businessPhone = t.businessPhoneNumberRequired;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    if (
      formData.categoryId &&
      formData.businessImages.length > 0
    ) {
      
      toast.success(t.step2Completed);
      setStep(3);
    } else {
      toast.error(t.fillAllFields);
    }
  }

  const validateStep3 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = t.firstNameRequired;

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = t.phoneNumberRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      // Cambié formData.email por formData.businessEmail
      newErrors.email = t.invalidEmailUser;
    }
    if (!formData.businessPhone.trim())
      newErrors.businessPhone = t.businessPhoneNumberRequired;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen flex">
       <LoadingOverlay isLoading={isLoading} />
       <Toaster position="top-right" />

      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <Carousel slides={carouselSlides} />
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-y-auto max-h-screen">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            {/* <p className="text-sm text-gray-600">
              {t.alreadyHaveAccount}{" "}
              <Link href="/signin" className="text-blue-600 hover:underline font-medium">
                {t.signIn} →
              </Link>
            </p> */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.signUpToGitHub}
            </h2>

            <LanguageSelector />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <>
                <h3 className="text-lg font-medium mb-4">{t.step1}</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessName">{t.businessName}</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.businessName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.businessName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="businessEmail">{t.businessEmail}</Label>
                      <Input
                        id="businessEmail"
                        name="businessEmail"
                        type="email"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.businessEmail && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.businessEmail}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="businessDescription">
                      {t.businessDescription}
                    </Label>
                    <Textarea
                      id="businessDescription"
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={handleInputChange}
                      required
                      className="h-20"
                      minLength={100}
                    />
                    {errors.businessDescription && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.businessDescription}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="businessPhone">{t.businessPhone}</Label>
                    <PhoneInput
                      country={"co"}
                      value={formData.businessPhone}
                      onChange={(value) =>
                        handlePhoneChange(value, null, "businessPhone")
                      }
                      inputProps={{
                        name: "businessPhone",
                        required: true,
                        className: "w-full p-2 border pl-10 rounded",
                      }}
                    />
                    {errors.businessPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.businessPhone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={() => {
                      if (validateStep1()) {
                        toast.success(t.step1Completed)
                        setStep(2);
                      } else {
                        toast.error(t.fillAllFields)
                      }
                    }}
                  >
                    {t.next}
                  </Button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-lg font-medium mb-4">{t.step2}</h3>

                <div>
                  <Label htmlFor="imageSelect">{t.selectCategory}</Label>
                  <CategoriesWrap onCategorySelect={handleCategorySelect} categories={categories} />
                </div>

                <div>
                  <Label htmlFor="businessImages">{t.uploadImages}</Label>
                  <input
                    className="file-input-container"
                    id="businessImages"
                    name="businessImages"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                  <div className="mt-2 flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {formData.businessImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image.preview}
                          alt="Business"
                          className="w-16 h-16 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleImageRemove(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
             
                <div>
                  <Label>{t.location}</Label>
                  {typeof window !== "undefined" && (
                    <SimpleMap onLocationSelect={handleLocationSelect} />
                  )}
                </div>

                <div className="flex justify-between my-6">
                  <Button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      if (validateStep1()) {
                        setStep(1);
                      } else {
                        toast.error(t.fillAllFields)
                      }
                    }}
                  >
                    {t.previous}
                  </Button>
                  <Button onClick={() => {
                      validateStep2()
                    }}>
                    {t.next}
                  </Button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="text-lg font-medium mb-4">{t.step3}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t.firstName}</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t.lastName}</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">{t.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phoneNumber">{t.phoneNumber}</Label>
                  <PhoneInput
                    country={"co"}
                    value={formData.phoneNumber}
                    onChange={(value) =>
                      handlePhoneChange(value, null, "phoneNumber")
                    }
                    inputProps={{
                      name: "phoneNumber",
                      required: true,
                      className: "w-full p-2 border rounded pl-10",
                    }}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="address">{t.address}</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="text-sm text-gray-600">
                  {t.textPolityOne }
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    {t.terms0fService}
                  </Link>
                  {t.textPrivacidad }
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    {t.privacyStatement}
                  </Link>
                  {t.emailPrivacy}
                </div>
                <div className="flex justify-between my-6">
                  <Button
                    type="button"
                    onClick={() => {
                      setStep(2);
                    }}
                  >
                    {t.previous}
                  </Button>
                  <Button onClick={() => {}} type="submit">
                    {t.submit}
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <LanguageProvider>
      <SignUpPageContent />
    </LanguageProvider>
  );
}
