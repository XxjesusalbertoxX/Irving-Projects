import { Request, Response } from 'express';
import { getClientById, updateClientById, getAllClients } from '../services/clientService';

export class ClientController {
  async getAllClients(req: Request, res: Response): Promise<Response> {
    try {
      const clients = await getAllClients();
      return res.status(200).json(clients);
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateClient(req: Request, res: Response): Promise<Response> {
    try {
      const { clientId } = req.params;
      const { name, surname, phone, email, address } = req.body;

      const client = await updateClientById(clientId, { name, surname, phone, email, address });
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }

      return res.status(200).json({ message: 'Client updated successfully', client });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
