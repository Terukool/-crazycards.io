export type CardValue = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "Skip" | "Reverse" | "Draw Two" | "Wild" | "Wild Draw Four";

export const cardValueToSvgFile : {[card in CardValue] : string } = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    Skip: "skip",
    Reverse: "reverse",
    Wild: "wild",
    "Draw Two": "drawTwo",
    "Wild Draw Four": "wildDrawFour"
};