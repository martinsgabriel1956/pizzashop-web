import { httpClient } from '@/app/lib/axios'

export type RegisterRestaurantBody = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant(body: RegisterRestaurantBody) {
  await httpClient.post('/restaurants', body)
}
