export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Certificate',
    route: '/certificates/EventCertificates',
  },
  {
    label: 'About Us',
    route: '/About/AboutUs',
  },
  {
      label: 'Contact',
      route: '/Contact/contact',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}