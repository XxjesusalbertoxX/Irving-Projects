import { Client } from '../../database/models/Client';

export const createClient = async (data: any) => {
  return await Client.create(data);
};

export const getClientById = async (id: string) => {
  return await Client.findByPk(id);
};

export const updateClientById = async (id: string, data: any) => {
  const client = await Client.findByPk(id);
  if (client) {
    await client.update(data);
    return client;
  }
  return null;
};

export const getAllClients = async () => {
  return await Client.findAll();
};
