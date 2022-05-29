import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

const BASE = {
  color: colors.dark,
  letterSpacing: 0.41,
  lineHeight: 41,
  textAlign: "center",
};

const PARA = {
  lineHeight: 26,
  letterSpacing: -0.41,
  textAlign: "center",
};

export const presets = {
  default: BASE,
  h1: {
    ...BASE,
    fontFamily: typography.primary,
    fontSize: 34,
    fontWeight: 700,
  },
  h2: {
    ...BASE,
    fontSize: spacing[16],
    fontWeight: 700,
  },
  h3: {
    ...BASE,
    fontSize: spacing[11],
  },
  small: {
    ...PARA,
    fontFamily: typography.secondary,
    fontSize: 17,
    fontWeight: 400,
    color: colors.white_light,
  },
};
