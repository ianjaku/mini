
export type FinallyFunc = () => void;

export interface Queue<T> {
  items: T[],
  working: boolean,
  handler?: QueueHandler<T>,
  finally?: FinallyFunc
}

export type QueueHandler<T> = (value: T) => void;

export function createQueue<T>(): Queue<T> {
  return {
    items: [],
    working: false
  }
}

export function setHandler<T>(queue: Queue<T>, handler: QueueHandler<T>) {
  queue.handler = handler;
  runHandler(queue);
  return;
}

export function setFinally<T>(queue: Queue<T>, finallyFunc: FinallyFunc) {
  queue.finally = finallyFunc;
  runHandler(queue);
  return;
}

export function addToQueue<T>(queue: Queue<T>, value: T) {
  queue.items.push(value);

  if (!queue.working) {
    runHandler<T>(queue);
  }
  
  return queue;
}

export function runHandler<T>(queue: Queue<T>) {
  if (!queue.handler || queue.items.length === 0) return;
  queue.working = true;
  while (queue.items.length > 0) {
    handleItem(queue);
  }
  if (queue.finally) {
    queue.finally()
  }
  if (queue.items.length > 0) {
    runHandler(queue);
  } else {
    queue.working = false;
  }
}

export function handleItem<T>(queue: Queue<T>) {
  const item = getAndRemoveOldest(queue);
  if (item == null) return;
  if (!queue.handler) return;
  queue.handler(item);
}

function getAndRemoveOldest<T>(queue: Queue<T>) {
  return queue.items.shift();
}
