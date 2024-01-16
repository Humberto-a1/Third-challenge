// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword()
{
var len;
var arraySel;
var password;
var randomCeil;
var currentChar;
var includeLower;
var includeUpper;
var lowerArrayno;
var upperArrayno;
var includeSpecial;
var includeNumeric;
var numericArrayno;
var specialArrayno;
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialArray = ['!', '#', '$', '%', '&', '*', '+', '-', '_', ':', ';', '=', '<', '>'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    password = "";

    do
    {
        len = prompt("Please enter the password's length");

        if ((len < 8 || len > 128) && len != null)
            window.alert("Length must be between 8 and 128");
    }
    while ((len < 8 || len > 128) && len != null);

    if (len != null)
    {
        do
        {
            randomCeil = 0;                                              // Counts the different types of chars we will use (upper lower, psecial...)
            do
            {
                includeUpper = prompt("Include uppercase Y/N?");
                if (includeUpper != null)
                    includeUpper = includeUpper.toUpperCase();

                if (includeUpper != "Y" && includeUpper != "N" && includeUpper != null)
                    window.alert("Please type a Y or a N");

                if (includeUpper == "Y")
                {
                    upperArrayno = randomCeil;                           // If this type of char selected, we want this array to be selected
                    randomCeil++;
                }
                else
                    upperArrayno = -1;                                   // If this type of char not selected, we do not want to use that array
            }
            while (includeUpper != "N" && includeUpper != "Y" && includeUpper != null);

            if (includeUpper != null)
            {
                do
                {
                    includeLower = prompt("Include lowercase Y/N?");
                    if (includeLower != null)
                        includeLower = includeLower.toUpperCase();

                    if (includeLower != "Y" && includeLower != "N" && includeLower != null)
                        window.alert("Please type a Y or a N");

                    if (includeLower == "Y")
                    {
                        lowerArrayno = randomCeil;                       // If this type of char selected, we want this array to be selected
                        randomCeil++;
                    }
                    else
                        lowerArrayno = -1;                               // If this type of char not selected, we do not want to use that array
                }
                while (includeLower != "N" && includeLower != "Y" && includeLower != null);

                if (includeLower != null)
                {
                    do
                    {
                        includeNumeric = prompt("Include numeric Y/N?");
                        if (includeNumeric != null)
                            includeNumeric = includeNumeric.toUpperCase();

                        if (includeNumeric != "Y" && includeNumeric != "N" && includeNumeric != null)
                            window.alert("Please type a Y or a N");

                        if (includeNumeric == "Y")
                        {
                            numericArrayno = randomCeil;                 // If this type of char selected, we want this array to be selected
                            randomCeil++;
                        }
                        else
                            numericArrayno = -1;                         // If this type of char not selected, we do not want to use that array
                    }
                    while (includeNumeric != "N" && includeNumeric != "Y" && includeNumeric != null);

                    if (includeNumeric != null)
                    {
                        do
                        {
                            includeSpecial = prompt("Include special chars Y/N?");
                            if (includeSpecial != null)
                                includeSpecial = includeSpecial.toUpperCase();

                            if (includeSpecial != "Y" && includeSpecial != "N" && includeSpecial != null)
                                window.alert("Please type a Y or a N");

                            if (includeSpecial == "Y")
                            {
                                specialArrayno = randomCeil;             // If this type of char selected, we want this array to be selected
                                randomCeil++;
                            }
                            else
                                specialArrayno = -1;                     // If this type of char not selected, we do not want to use that array
                        }
                        while (includeSpecial != "N" && includeSpecial != "Y" && includeSpecial != null);

                        if (includeSpecial != null)
                        {
                            if (randomCeil > 0)                          // At least one type of char has been selected
                            {
                                password = "";
                                for (i = 0; i < len; i++)
                                {
                                    arraySel = Math.random() * randomCeil;                    // Ceiling of the randon is the number of types of chars selected
                                    arraySel = Math.floor(arraySel);

                                    if (arraySel === upperArrayno)
                                    {
                                        if (includeUpper === "Y")
                                        {
                                            charSel = Math.random() * 26;                     // Number of chars in this array
                                            charSel = Math.floor(charSel);
                                            currentChar = uppercaseArray[charSel];
                                        }
                                        else
                                            arraySel++;
                                    }

                                    if (arraySel === lowerArrayno)
                                    {
                                        if (includeLower === "Y")
                                        {
                                            charSel = Math.random() * 26;                     // Number of chars in this array
                                            charSel = Math.floor(charSel);
                                            currentChar = lowercaseArray[charSel];
                                        }
                                        else
                                            arraySel++;
                                    }

                                    if (arraySel === specialArrayno)
                                    {
                                        if (includeSpecial === "Y")
                                        {
                                            charSel = Math.random() * 14;                     // Number of chars in this array
                                            charSel = Math.floor(charSel);
                                            currentChar = specialArray[charSel];
                                        }
                                        else
                                            arraySel++;
                                    }

                                    if (arraySel === numericArrayno)
                                    {
                                        if (includeNumeric === "Y")
                                        {
                                            charSel = Math.random() * 10;                     // Number of chars in this array
                                            charSel = Math.floor(charSel);
                                            currentChar = numericArray[charSel];
                                        }
                                    }

                                    password = password + currentChar;
                                }
                            }
                            else
                                window.alert("You must choose at least one type of character or cancel");
                        }
                    }
                }
            }
        } while (password === "");
    }

    return password;
}

function writePassword() {
var password
var passwordText;

    passwordText = document.querySelector("#password");

    password = generatePassword();

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
