import fondo from './img/frentesedeblur.png';
import './examen.css';
import exam from './img/exam.png';
import { getExamen } from '../../helpers/getExamen';
import { useEffect, useState } from 'react';
import { NumericPad } from '../pad-numerico/NumericPad';

export const Examen = () => {

    const [numpad, SetNumpad] = useState(false);
    const [rutExamen, setRutExamen] = useState(['194064942']);

    const getExam = async () => {
        const newExamen = await getExamen(rutExamen);
        setRutExamen(newExamen);
    }

    const activeNumpad = () => {
        SetNumpad(!numpad);
        console.log(numpad)
    }

    useEffect(() => {
        getExam()
        setTimeout(() => {
        },);
    }, []);


    return (
        <>
            <img className='a' src={fondo} />
            <div className='Aaa'>
                <img className='b' src={exam} />

                <form>
                    <h1 className='ac'>INGRESA tu RUT</h1>
                    <input />
                    {numpad ?
                        (<div
                            className="pad-numerico"
                        >
                            {
                                <NumericPad
                                    setRutAlumnos={''}
                                    rutAlumnos={''}
                                    activeNumpad={activeNumpad}
                                    submit={''}

                                />
                            }
                        </div>) : ''
                    }
                </form>
            </div>

        </>
    )
}