import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import type { IGardenTheme } from '../../../../types';

// Modal overrides
export const modal = ({ theme }: { theme: IGardenTheme }) => {
  const shadowColor = getColor({ theme, variable: 'shadow.large' });
  const surface = getColor({ theme, variable: 'background.default' });
  const offsetY = `${theme.space.base * 5}px`;
  const blurRadius = `${theme.space.base * 7}px`;
  const elevation = theme.shadows.lg(offsetY, blurRadius, shadowColor);

  return css`
    border-radius: ${theme.borderRadii.xl};
    background-color: ${surface};
    /* overflow:visible so radius doesn't soft-clip the header border.
       Elevation + a surface-colored 2px outer ring: page text showing
       through the scrim (e.g. the Roles "Type" column) hard against the
       light divider reads as the stroke fading on the left. */
    overflow: visible;
    border: none;
    box-shadow: ${elevation}, 0 0 0 2px ${surface};
  `;
};

export const modalHeader = ({ theme }: { theme: IGardenTheme }) => {
  const surface = getColor({ theme, variable: 'background.default' });
  const divider = getColor({ theme, variable: 'border.subtle' });

  return css`
    flex-shrink: 0;
    background-color: ${surface};
    border-top-left-radius: ${theme.borderRadii.xl};
    border-top-right-radius: ${theme.borderRadii.xl};
    /* Native border paints inside the box — avoids edge AA against the scrim
       that made a full-bleed ::after read as fading on the left. */
    border-bottom: 1px solid ${divider};
  `;
};

export const modalBody = () => css`
  /* Scroll lives here so the shell can stay overflow:visible. */
  min-height: 0;
  overflow: auto;
`;

export const modalFooter = ({ theme }: { theme: IGardenTheme }) => css`
  flex-shrink: 0;
  background-color: ${getColor({ theme, variable: 'background.default' })};
  border-bottom-left-radius: ${theme.borderRadii.xl};
  border-bottom-right-radius: ${theme.borderRadii.xl};
`;

export const modalFooterItem = ({ theme }: { theme: IGardenTheme }) => css`
  margin-inline-start: ${theme.space.base * 3}px;

  &:first-child {
    margin-inline-start: 0;
  }
`;
