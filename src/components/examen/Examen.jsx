import fondo from './img/frentesedeblur.png';
import './examen.css';
import exam from './img/exam.png';
import { getExamen } from '../../helpers/getExamen';
import { useEffect, useState } from 'react';
import { NumericPadEx } from '../pad-numerico/NumericPadEx';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Examen = () => {

    const [numpad, SetNumpad] = useState(false);
    const [active, setActive] = useState(false);
    const [rutExamen, setRutExamen] = useState(['']);
    const nav = useNavigate();
    // const getExam = async () => {
    //     const newExamen = await getExamen(rutExamen);
    //     setRutExamen(newExamen);
    // }

    const activeNumpad = () => {
        SetNumpad(!numpad);
        console.log(numpad)
    }
    const onChangeRutExamen = (e) => {
        const value = e.target.value;
        setRutExamen(value);
        if (e.target.value === '') {
            setActive(false)
            setRutExamen({})
        }
    }
    const handleSubmitRutExamen = async (e) => {
        e.preventDefault();
        const { result } = await getExamen(rutExamen);
        setRutExamen(result);
        nav('resultado');
    }


    useEffect(() => {
        setTimeout(() => {
        },);
    }, []);


    return (
        <>
            <img className='a' src={fondo} />
            <div className='Aaa'>
                <img className='b' src={exam} />

                <form onSubmit={handleSubmitRutExamen}>
                    <h1 className='ac'>INGRESA tu RUT</h1>
                    <Input
                        negro={numpad}
                        onClick={activeNumpad}
                        type='text'
                        readOnly
                        onChange={onChangeRutExamen}
                        value={numpad ? rutExamen : 'INGRESA TU RUT'}
                        maxLength={9}
                    />
                </form>
                {numpad ?
                    (<div
                        className="pad-numerico"
                    >
                        {
                            <NumericPadEx
                                setRutExamen={setRutExamen}
                                rutExamen={rutExamen}
                                activeNumpad={activeNumpad}
                                submit={handleSubmitRutExamen}
                            />
                        }
                    </div>) : ''
                }

            </div>

        </>
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