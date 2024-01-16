// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword()
{
var len;
var arraySel;
var password;
var randomNum;
var currentChar;
var includeLower;
var includeUpper;
var includeSpecial;
var includeNumeric;
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialArray = ['!', '#', '$', '%', '&', '*', '+', '-', '_', ':', ';', '=', '<', '>'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    password = "NO PASSWORD GENERATED";

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
            includeUpper = prompt("Include uppercase Y/N?");
            if (includeUpper != null)
                includeUpper = includeUpper.toUpperCase();

            if (includeUpper != "Y" && includeUpper != "N" && includeUpper != null)
                window.alert("Please type a Y or a N");
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
                    }
                    while (includeSpecial != "N" && includeSpecial != "Y" && includeSpecial != null);

                    if (includeSpecial != null)
                    {
                        password = "";
                        for (i = 0; i < len; i++)
                        {
                            arraySel = Math.random() * 4;
                            arraySel = Math.floor(arraySel);

                            if (arraySel === 0)
                            {
                                if (includeUpper === "Y")
                                {
                                    charSel = Math.random() * 26;
                                    charSel = Math.floor(charSel);
                                    currentChar = uppercaseArray[charSel];
                                }
                                else
                                    arraySel++;
                            }

                            if (arraySel === 1)
                            {
                                if (includeLower === "Y")
                                {
                                    charSel = Math.random() * 26;
                                    charSel = Math.floor(charSel);
                                    currentChar = lowercaseArray[charSel];
                                }
                                else
                                    arraySel++;
                            }

                            if (arraySel === 2)
                            {
                                if (includeSpecial === "Y")
                                {
                                    charSel = Math.random() * 14;
                                    charSel = Math.floor(charSel);
                                    currentChar = specialArray[charSel];
                                }
                                else
                                    arraySel++;
                            }

                            if (arraySel === 3)
                            {
                                if (includeNumeric === "Y")
                                {
                                    charSel = Math.random() * 10;
                                    charSel = Math.floor(charSel);
                                    currentChar = numericArray[charSel];
                                }
                                else
                                    arraySel++;
                            }

                            password = password + currentChar;
                        }
                    }
                }
            }
        }
    }

    return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
