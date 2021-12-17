import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe( 'Pruebas del componente GifGrid', () => {

    test('Debe renderizar correctamente el componente <GifGrid />', () => {
        
        const categoria = 'Death Note';

        const wrapper = shallow(
            <GifGrid categoria={categoria} />
        );

        expect( wrapper ).toMatchSnapshot();

    });
    

});