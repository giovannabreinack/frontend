/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { consultar } from '../../services/Service';

interface Agricultor {
    id: number;
    fullName: string;
    cpf: string;
    birthDate: Date;
    phone: number;
}

function ListarAgricultores() {

    const [agricultores, setAgricultores] = useState<Agricultor[]>([]);

    async function consultarAgricultores() {

        try {
            await consultar('/agricultores', setAgricultores);
        } catch (error: any) {
            alert('Erro!')
        }

    }

    useEffect(() => {
        consultarAgricultores();
    }, []);

    return (
        <div className='lista'>
            <h1>Lista de Agricultores - Gerada pelo Axios</h1>
            <ul>
                {agricultores.map((agricultores) => (
                    <li key={agricultores.id}>{agricultores.fullName}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListarAgricultores;