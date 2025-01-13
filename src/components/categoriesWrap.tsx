import React, { useEffect, useState } from "react";
import { Category } from "../interface/category";

interface CategoriesWrapProps {
  onCategorySelect: (id: string) => void; // Prop para recibir la función de callback
}

const CategoriesWrap: React.FC<CategoriesWrapProps> = ({ onCategorySelect, categories  }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     const response = await fetchCategories();
  //     setCategories(response.data);
  //     setLoading(false);
  //   };

  //   getCategories();
  // }, []);

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    onCategorySelect(id); // Llamar a la función de callback con el ID seleccionado
  };

  

  return (
    <div style={styles.wrapContainer}>
      {categories.map((category) => (
        <div
          key={category._id}
          style={
            selectedCategory === category._id
              ? { ...styles.categoryCard, ...styles.selectedCard }
              : styles.categoryCard
          }
          onClick={() => handleCategorySelect(category._id!)}
        >
          <img
            src={category.image}
            alt={category.name}
            style={styles.categoryImage}
          />
          <p style={styles.categoryName}>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

// Estilos en línea
const styles = {
  wrapContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
    padding: "16px",
  },
  categoryCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textAlign: "left",
    border: "1px solid #ddd",
    borderRadius: "30px",
    padding: "8px 16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  },
  categoryImage: {
    width: "35px",
    height: "35px",
    objectFit: "cover",
  },
  categoryName: {
    fontSize: "16px",
    fontWeight: "bold",
    flex: 1,
  },
  selectedCard: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid black",
  },
};

export default CategoriesWrap;
