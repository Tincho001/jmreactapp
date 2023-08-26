import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  gap: -0.5rem;
  width: 90px;
  height:40px;
  padding: 1rem 4rem;
  background-color: ${({ selected }) =>
    selected ? 'var(--blue)' : 'var(--dark-blue)'}; 
  border-radius: 10px;
  cursor: pointer;

  h2 {
    font-size: 1.2rem;
  }

`;


