// passwordUtils.ts
export const generateSecurePassword = (length: number = 12): string => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    // Garantizar que al menos un carácter de cada tipo esté presente
    const allChars = upperCase + lowerCase + numbers + specialChars;
  
    let generatedPassword = "";
    generatedPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    generatedPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
    generatedPassword += specialChars[Math.floor(Math.random() * specialChars.length)];
  
    // Completar la longitud de la contraseña con caracteres aleatorios
    for (let i = generatedPassword.length; i < length; i++) {
      generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }
  
    // Mezclar los caracteres de la contraseña para que no sigan un patrón predecible
    return generatedPassword
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };
  