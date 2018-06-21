# Scalability

## How?

__Web Hosts__
* Bluehost
* DreamHost
* Go Daddy
* Host Gator
* pair Networks
* ...

What should you be looking for in a web host?
* Security (usernames and passwords should be encrypted)
* IP address access (some IPs are blocked in other countries)

Alternatives to web hosting companies:
__VPSes:__ (Take a super fast server and they chop it up to multiple servers) - run multiple servers (virtual machine)
* DreamHost
* Go Daddy
* Host Gator
* Linode
* pair Networks
* Slicehost
* VPSLAND
* ...
_Costs are usually more_

All of a sudden your website became super popular...
How do you scale it?

## Vertical Scaling

If you are running low on RAM, just get more RAM. However there is a ceiling. You can only buy a machine of 3 GHz. You will either exhaust your financial resources or technological resources. Quad-core is where you can do things 4 things at a time. Some people don't need all of these advance cores.

__Vertical Scaling__
* CPU (Servers at least 2)
  * cores, L2 Cache, ... (Some servers have multiple cores - dual core - (doing 2 things at once))
* Disk
  * PATA, SATA, SAS, ... (Parallel ATA or IDE, SATA, SAS - all have to do with hard drives)
      * PATA, and SATA (Serial Advanced Technology Attachment) ~ 7200 RPM's
      * SAS (Serial Attached SCSI) - 10K RPM's or 15K RPM's $$$$
      * SSD no moving parts
  * RAID
* RAM
* ...

## Horizontal Scaling (Aware of the ceiling)

Cheaper hardware, a bunch of slower machines. Using multiple servers to build things together. We want to distribute the request to all the web servers. We need a __load balancer__ that balances load between all servers. The __load balancer__ can have a public IP address and the servers can have private IP address (the rest of the world cannot see it, which is more security). Also the world has a lot less available IP address that are public, and since we only need one, it helps solve that problem.

The request arrives to the load balancer. Figure out who to send the server to? Probably by load, we can have the load balancer to send to the least busy server.

// 20 minute mark
