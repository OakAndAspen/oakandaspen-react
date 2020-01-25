import en from "translations/en";
import fr from "translations/fr";

export function getLanguage(code) {
    switch (code) {
        case "en":
            return en;
        default:
            return fr;
    }
}