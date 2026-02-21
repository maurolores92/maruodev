import styled from '@emotion/styled';
import { Theme } from '@styles/colors';
import { Container } from '@components/Container';

export const AIToolsWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 16px;
  max-width: 920px;
  margin: 0 auto;
`;

export const AIToolsStyled = styled.section`
  background: ${Theme.bgElement};
  padding: 24px 0;
  margin-bottom: 50px
`;

export const AIToolsInnerWrapper = styled(Container)`
  max-width: 920px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 700;
  color: ${Theme.textSecondary};
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const Select = styled(Input)`
  /* Reuse Input styles so the select matches text inputs visually */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  color: inherit;
`;

export const Submit = styled.button`
  background: ${Theme.primary};
  color: white;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
`;

export const Result = styled.pre`
  background: #f9fafb;
  padding: 12px;
  border-radius: 8px;
  overflow: auto;
  white-space: pre-wrap;
`;

export const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const CopyButton = styled.button`
  background: ${Theme.primary};
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
`;

export const Hashtags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const Hashtag = styled.span`
  background: #eef2ff;
  color: #3730a3;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
`;

export const LengthButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const LengthButton = styled.button<{ active?: boolean }>`
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #e5e7eb;
  background: ${(p) => (p.active ? Theme.primary : 'transparent')};
  color: ${(p) => (p.active ? 'white' : 'inherit')};
  font-weight: 600;
`;
