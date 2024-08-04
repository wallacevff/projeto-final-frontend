import { NavbarItem } from '@/types/navbar/NavBarItem';
import axios from 'axios';

// Mock data

export default {
   async getMenuItens() : Promise<NavbarItem[]> {
        return (await axios.get('/api/navbaritens')).data;
    }
};