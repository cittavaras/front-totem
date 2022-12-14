import fondo from './img/frentesedeblur.png';
import './examen.css';
import exam from './img/exam.png';
import { getExamen } from '../../helpers/getExamen';
import { useEffect, useState } from 'react';
import { NumericPadEx } from '../pad-numerico/NumericPadEx';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useOpciones from '../../hooks/useOpciones';

export const Examen = () => {

    const [numpad, SetNumpad] = useState(false);
    const [active, setActive] = useState(false);
    const { rutAlumnos, setRutAlumnos, setRutExamen } = useOpciones();
    const nav = useNavigate();

    const activeNumpad = () => {
        SetNumpad(!numpad);
        console.log(numpad)
    }
    const onChangeRutAlumnos = (e) => {
        const value = e.target.value;
        setRutAlumnos(value);
        if (e.target.value === '') {
            setActive(false)
            setRutAlumnos({})
        }
    }
    const handleSubmitRutAlumnos = async (e) => {
        e.preventDefault();
        const { result } = await getExamen(rutAlumnos);
        setRutExamen(result);
        nav('resultado');
    }


    useEffect(() => {
        setTimeout(() => {
        },);
    }, []);


    return (
        <Cont>
            <div className='Aaa'>
                <img className='b' src={exam} />

                <form onSubmit={handleSubmitRutAlumnos}>
                    <h1 className='ac'>INGRESA TU RUT</h1>
                    <Input
                        negro={numpad}
                        onClick={activeNumpad}
                        type='text'
                        readOnly
                        onChange={onChangeRutAlumnos}
                        value={numpad ? rutAlumnos : 'INGRESA TU RUT'}
                        maxLength={9}
                    />
                </form>
                {numpad ?
                    (<div
                        className="pad-numerico"
                    >
                        {
                            <NumericPadEx
                                setRutAlumnos={setRutAlumnos}
                                rutAlumnos={rutAlumnos}
                                activeNumpad={activeNumpad}
                                submit={handleSubmitRutAlumnos}
                            />
                        }
                    </div>) : ''
                }

            </div>

        </Cont>
    )
}
const Input = styled.input`
position: absolute;
width: 772px;
height: 104px;
left: 154px;
top: 700px;
text-align: center;
color: ${props => props.negro ? 'black' : 'rgba(0, 0, 0, 0.2)'};
text-transform: uppercase;
font-weight: 800;
font-size: 28px;
background: rgba(255, 255, 255, 0.59);
border-radius: 22px;
`;
const Cont = styled.div` 
  justify-content: center;
  background-image: url(${fondo});
  object-fit: cover;
  height: 100vh;
  background-size: 1080px 1920px;
  background-position: center; 
  `;