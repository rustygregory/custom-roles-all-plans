import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import type { IGardenTheme } from '../../../../types';

/**
 * Flora field titles — Medium/Bold, 14/20, FG/default.
 * Garden defaults to semibold + inline labels (17px box); legends are block
 * (20px). Force the same Medium/Bold block title so Name / Description match
 * Role type / Search permissions. Radio options use forms.radio_label.
 */
export const inputLabel = ({
  theme,
  $isRegular,
}: {
  theme: IGardenTheme;
  $isRegular?: boolean;
}) => {
  const color = getColor({ theme, variable: 'foreground.default' });

  return css`
    display: block;
    color: ${color};
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.md};
    font-weight: ${$isRegular ? theme.fontWeights.regular : theme.fontWeights.bold};
  `;
};

export const fieldsetLegend = ({ theme }: { theme: IGardenTheme }) => {
  const color = getColor({ theme, variable: 'foreground.default' });

  return css`
    display: block;
    color: ${color};
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.md};
    font-weight: ${theme.fontWeights.bold};
  `;
};
