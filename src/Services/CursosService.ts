import Curso from '@/types/domain/curso/Curso';
import axios from 'axios';
import { UUID } from 'crypto';

// Mock data

export default {
   async getCursos() : Promise<Curso[]> {
        return (await axios.get('/api/curso/getcursos')).data;
    },
    async getCurso(id: UUID) : Promise<Curso> {
        return (await axios.get(`/api/curso/${id}`)).data;
    }
};