import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { TableSchema } from 'features/FloorPlan/Tables/tables.types';

export const TableLabel = styled.text`
  user-select: none;
  fill: ${({ theme: { colors } }) => colors.invertedText};
`;

TableLabel.defaultProps = {
  alignmentBaseline: 'central',
  textAnchor: 'middle'
};

const getShapeColors = ({
  theme: { colors },
  status
}: {
  theme: Theme;
  status: TableSchema['status'];
}) => css`
  fill: ${status === 'available' ? colors.primary : colors.disabledBackground};
  stroke: ${colors.border};
  stroke-width: 6;

  ${status === 'available'
    ? css`
        cursor: pointer;

        &:hover {
          fill: ${colors.primaryHover};
          stroke: ${colors.focusOutline};
        }
      `
    : ''}
`;

export const RoundShape = styled.circle<{ status: TableSchema['status'] }>`
  ${getShapeColors}
`;

export const SquareShape = styled.rect<{ status: TableSchema['status'] }>`
  ${getShapeColors}
`;