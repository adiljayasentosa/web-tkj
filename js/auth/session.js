/* Demo-only role preview. This is NOT authentication and must be replaced by Firebase Auth. */
let currentSession=null;
export const getSession=()=>currentSession;
export const startPreviewSession=(role,studentName='')=>{currentSession={role,studentName,preview:true};return currentSession};
export const endSession=()=>{currentSession=null};
