export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Certificate',
      route: '/events/certificate',
    },
    {
      label: 'About',
      route: '/About',
    },
    {
        label: 'Contact',
        route: '/contact',
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