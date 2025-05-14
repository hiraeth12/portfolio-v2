declare module 'aos' {
  const AOS: {
    init: (options?: any) => void;
    refresh: () => void;
  };
  export default AOS;
}
