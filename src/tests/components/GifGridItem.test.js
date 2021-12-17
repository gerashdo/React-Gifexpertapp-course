import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";



describe( 'Pruebas para el componente <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'http://localhost/algo.jpg'
    
    const wrapper = shallow(
        <GifGridItem title={ title } url={ url } />
    );

    test('Se renderiza correctamente el componente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Debe tener animate__fadeIn', () => {
       
        const div = wrapper.find('div');
        // console.log(div.props().className)
        expect( div.prop('className') ).toContain( 'animate__fadeIn' );

    });
    
    
    

});