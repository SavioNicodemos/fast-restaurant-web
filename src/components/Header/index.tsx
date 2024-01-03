import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

type IHeaderProps = {
  openModal: () => void;
};

const Header = ({ openModal }: IHeaderProps) => (
  <Container>
    <header>
      <img src={Logo} alt='FastRestaurant' />
      <nav>
        <div>
          <button
            data-testid='add-new-food-button'
            type='button'
            onClick={() => {
              openModal();
            }}
          >
            <div className='text'>Novo Prato</div>
            <div className='icon'>
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);

export default Header;
