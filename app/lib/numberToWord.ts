export default function numberToWord(number: number) {
	let fullNum = "";

	for (let i = number.toString().length-1; i >= 0; i--) {
		const num = parseInt(number.toString()[number.toString().length-1-i]);
        let nextNum = -1
        if(i == 1) {
            nextNum = parseInt(number.toString()[number.toString().length-1])
        }
        if (number == 10) {
            fullNum += "ten";
        } else if (number == 11) {
			fullNum += "eleven";
			break;
		} else if (number == 12) {
			fullNum += "twelve";
			break;
		} else if (number == 13) {
			fullNum += "thirteen";
			break;
		} else if (number == 14) {
			fullNum += "fourteen";
			break;
		} else if (number == 15) {
			fullNum += "fifteen";
			break;
		} else if (number == 16) {
			fullNum += "sixteen";
			break;
		} else if (number == 17) {
			fullNum += "seventeen";
			break;
		} else if (number == 18) {
			fullNum += "eighteen";
			break;
		} else if (number == 19) {
			fullNum += "nineteen";
			break;
		}
		if (i == 1 && number >= 20) {
			if (num == 2) {
				fullNum += "twenty";
			} else if (num == 3) {
				fullNum += "thirty";
			} else if (num == 4) {
				fullNum += "fourty";
			} else if (num == 5) {
				fullNum += "fifty";
			} else if (num == 6) {
				fullNum += "sixty";
			} else if (num == 7) {
				fullNum += "seventy";
			} else if (num == 8) {
				fullNum += "eighty";
			} else if (num == 9) {
				fullNum += "ninety";
			}
            if(nextNum != 0) {
                fullNum += "-"
            }
		}
		if (i == 0) {
			if (num == 1) {
				fullNum += "one";
			} else if (num == 2) {
				fullNum += "two";
			} else if (num == 3) {
				fullNum += "three";
			} else if (num == 4) {
				fullNum += "four";
			} else if (num == 5) {
				fullNum += "five";
			} else if (num == 6) {
				fullNum += "six";
			} else if (num == 7) {
				fullNum += "seven";
			} else if (num == 8) {
				fullNum += "eight";
			} else if (num == 9) {
				fullNum += "nine";
			}
		}
	}
	return fullNum;
}
