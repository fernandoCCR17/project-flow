export enum RequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export enum RequestEvent {
  SEND = 'SEND',
  RESOLVE = 'RESOLVE',
  REJECT = 'REJECT',
  RESET = 'RESET',
}

const requestMachine: Record<RequestStatus, Partial<Record<RequestEvent, RequestStatus>>> = {
  [RequestStatus.IDLE]: {
    [RequestEvent.SEND]: RequestStatus.LOADING,
  },
  [RequestStatus.LOADING]: {
    [RequestEvent.RESOLVE]: RequestStatus.SUCCESS,
    [RequestEvent.REJECT]: RequestStatus.ERROR,
  },
  [RequestStatus.SUCCESS]: {
    [RequestEvent.RESET]: RequestStatus.IDLE,
    [RequestEvent.SEND]: RequestStatus.LOADING,
  },
  [RequestStatus.ERROR]: {
    [RequestEvent.RESET]: RequestStatus.IDLE,
    [RequestEvent.SEND]: RequestStatus.LOADING,
  },
};

export function transition(
  currentState: RequestStatus,
  event: RequestEvent
): RequestStatus {
  return requestMachine[currentState]?.[event] ?? currentState;
}