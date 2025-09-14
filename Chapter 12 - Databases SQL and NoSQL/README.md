
# Creating a Server Databases - SQL & NoSQL

## Q: what is a database?
**A: 
(Through Wikipedia)
In computing, a **database** is an organized collection of data or a type of data store based on the use of a **database management system** (**DBMS**), the software that interacts with end users, applications, and the database itself to capture and analyze the data. The DBMS additionally encompasses the core facilities provided to administer the database. The sum total of the database, the DBMS and the associated applications can be referred to as a **database system**. Often the term "database" is also used loosely to refer to any of the DBMS, the database system or an application associated with the database.

## Types Of Databases:
**1 Relational DB** - `MySQL, PostgreSQL`

Relational databases like MySQL and PostgreSQL use structured tables with 	 predefined schemas, making them ideal for handling complex queries and transactions. They ensure data integrity through ACID properties and are widely used for applications requiring robust, relational data models.

**2 NoSQL DB** -`MongoDB` 

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic schemas. It's highly scalable and ideal for handling large volumes of unstructured or semi-structured data, making it popular for modern web applications

**3 In-memory DB** - `Redis`

Redis is an in-memory database known for its high-speed data processing capabilities. It supports various data structures like strings, hashes, and lists, making it suitable for caching, real-time analytics, and message brokering. 

**4 Distributed SQL DB** - `Cockroach DB`  

Cockroach DB is a distributed SQL database designed to scale horizontally across multiple nodes while providing strong consistency and ACID transactions. It's ideal for applications requiring high availability and resilience across different geographic locations. 

**5 Time Series DB** - `Influx DB`

Influx DB is a time series database optimized for handling high write and query loads, particularly for time-stamped data. It's commonly used for monitoring, real-time analytics, and IoT applications where time-based data is crucial. 

**6 OO DB** - `db4o` 

db4o is an object-oriented database that stores data as objects, closely aligning with object-oriented programming languages. It simplifies development by allowing direct storage and retrieval of objects without the need for conversion to relational tables. 

**7 Graph DB**: `Neo4j` 

Neo4j is a graph database that excels at handling complex relationships between data entities. It uses a graph structure with nodes, relationships, and properties, making it ideal for applications like social networks, recommendation engines, and fraud detection.

**8 Hierarchical DB** - `IBM IMS` 

IBM IMS is a hierarchical database that organizes data in a tree-like structure with parent-child relationships. It's used primarily in legacy systems for high performance transaction processing and is known for its reliability in handling large-scale, mission-critical applications. 

**9 Network DB** - `IDMS` 

IDMS (Integrated Database Management System) is a network database that represents data using a graph of record types and set relationships. It allows more complex relationships than hierarchical databases and is often used in legacy systems requiring high performance.

**10 Cloud DB** -`Amazon RDS `

Amazon RDS (Relational Database Service) is a managed cloud database service that supports multiple relational database engines, including MySQL, PostgreSQL, and Oracle. It automates tasks like backups, patching, and scaling, making it easy to deploy and manage databases in the cloud

Most commonly used databases are: 
1 **Relational DB** 
2 **NoSQL DB**

## RDBMS (MySQL, PostgreSQL)

Relational Database Management Systems (RDBMS) like MySQL and PostgreSQL are popular choices for managing structured data. 

## NoSQL and MongoDB

NoSQL databases can be classified into four main types: 
1 *Document Databases* 
2 *Key-Value Databases* 
3 *Graph Databases* 
4 *Wide-Column Databases* 
5 *Multi-Model Databases*

## SQL vs NoSQL
![Difference between SQL and NoSQL](./images/SQL%20vs%20NoSQL.jpeg)
