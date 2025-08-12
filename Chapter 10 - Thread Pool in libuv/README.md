# Thread pool in libuv

Whenever there's an asynchronous task, V8 offloads it to libuv. For example, when reading a file, libuv uses one of the threads in its thread pool. The file system (fs) call is assigned to a thread in the pool, and that thread makes a request to the OS. While the file is being read, the thread in the pool is fully occupied and cannot perform any other tasks. Once the file reading is complete, the engaged thread is freed up and becomes available for other operations. For instance, if you're performing a cryptographic operation like hashing, it will be assigned to another thread. There are certain functions for which libuv uses the thread pool.

` In Node.js, the default size of the thread pool is 4 threads:`
```
    UV_THREADPOOL_SIZE=4
```

## Q: Suppose you have a server with many incoming requests, and users are hitting APIs. Do these APIs use the thread pool?
 A : No.

 In the libuv library, when it interacts with the OS for networking tasks, it uses sockets. Networking operations occur through these sockets. Each socket has a socket descriptor, also known as a file descriptor (although this has nothing to do with the file system). 
 
 When an incoming request arrives on a socket, and you want to write data to this connection, it involves blocking operations. To handle this, a thread is created for each request. However, creating a separate thread for each connection is not practical, especially when dealing with thousands of requests.
 
  Instead, the system uses efficient mechanisms provided by the OS, such as `epoll` (on Linux) or `kqueue` on macOS. These mechanisms handle multiple file descriptors (sockets) without needing a thread per connection:

  Here How it works:
  - `epoll` (**Linux**) and `kqueue` (**macOS**) are notification mechanisms used to manage many connections efficiently.
  -  When you create an `epoll` or `kqueue` descriptor, it monitors multiple file descriptors (sockets) for activity.
  -  The OS kernel manages these mechanisms and notifies libuv of any changes or activity on the sockets.
  -  This approach allows the server to handle a large number of connections efficiently without creating a thread for each one.

  The kernel-level mechanisms, like epoll and kqueue , provide a scalable way to manage multiple connections, significantly improving performance and resource utilization in a high-concurrency environment.

## Important points to follow:

 1 **DON'T BLOCK THE MAIN THREAD**
 - Don't use `sync` methods
 - Don't do operations on `heavy JSON Object` it will make load on main thread.
 - Avoid complex `Regular Expression`.
 - Avoid `Complex calculations` and big or `infine loops`.

 2 **Data Structures is important**
 - `epoll `- *Red Balck tree*
 - `timers` -*min heap*

 3 **Naming is very Important**

 4 **There's is always lots to learn**



