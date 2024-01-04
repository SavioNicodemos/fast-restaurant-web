import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
  editingFood: IFoodPlate;
}

interface IEditFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

const ModalEditFood = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }: IModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    (data: IEditFoodData) => {
      handleUpdateFood(data);
      setIsOpen();
    },
    [handleUpdateFood, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood} placeholder=''>
        <h1>Editar Prato</h1>
        <Input name='image' data-testid="edit-food-form-image" placeholder='Cole o link aqui' />

        <Input name='name' data-testid="edit-food-form-name" placeholder='Ex: Moda Italiana' />
        <Input name='price' data-testid="edit-food-form-price" placeholder='Ex: 19.90' />

        <Input name='description' data-testid="edit-food-form-description" placeholder='Descrição' />

        <button type='submit' data-testid='edit-food-button'>
          <div className='text'>Editar Prato</div>
          <div className='icon'>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
