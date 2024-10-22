// app/router.scroll.ts

export const scrollBehaviour = (_: any, __: any, savedPosition: any) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
};
  
  