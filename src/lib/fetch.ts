"use server";

const username = process.env.AUTH_USERNAME;
const password = process.env.AUTH_PASSWORD;
const auth = btoa(`${username}:${password}`);

export default async function $fetch(url: string | URL | Request) {
  return fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
}
