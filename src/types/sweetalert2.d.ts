// Custom SweetAlert2 type definitions
declare module 'sweetalert2' {
  interface SweetAlertOptions {
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
    title?: string;
    text?: string;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    background?: string;
    color?: string;
  }

  interface SweetAlertResult {
    isConfirmed: boolean;
    isDenied?: boolean;
    isDismissed?: boolean;
    value?: any;
  }

  function fire(options: SweetAlertOptions): Promise<SweetAlertResult>;
  
  export = Swal;
  export as namespace Swal;
  
  declare const Swal: {
    fire: typeof fire;
  };
}
