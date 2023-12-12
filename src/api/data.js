import * as api from './api.js';

//toDo change endpoints

const endpoints = {
    catalog: '/data/cars?sortBy=_createdOn%20desc',
    recents: '/data/catalog',
    byId: '/data/cars/',
    create: '/data/cars',
    update: '/data/cars/',
}

export async function getRecent() {
    return api.get(endpoints.recents)
}

export async function getAll() {
    return api.get(endpoints.catalog)
}

export async function getById(id) {
    return api.get(endpoints.byId + id)
}

export async function getMyBooks(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function create(data) {
    return api.post(endpoints.create, data)
}

export async function deleteById(id) {
return api.del(endpoints.byId + id);
}

export async function update(id, data) {
    return api.put(endpoints.update + id, data)
}