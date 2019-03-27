# LinuxCommand

## 系统信息

```bash
arch # 显示机器的处理器架构(1)
uname-m # 显示机器的处理器架构(2)
uname-r # 显示正在使用的内核版本
dmidecode-q # 显示硬件系统部件-(SMBIOS/DMI)
hdparm-i/dev/hda # 罗列一个磁盘的架构特性
hdparm-tT/dev/sda # 在磁盘上执行测试性读取操作
cat/proc/cpuinfo # 显示CPUinfo的信息
cat/proc/interrupts # 显示中断
cat/proc/meminfo # 校验内存使用
cat/proc/swaps # 显示哪些swap被使用
cat/proc/version # 显示内核的版本
cat/proc/net/dev # 显示网络适配器及统计
cat/proc/mounts # 显示已加载的文件系统
lspci-tv # 罗列PCI设备
lsusb-tv # 显示USB设备
date # 显示系统日期
cal2007 # 显示2007年的日历表
date041217002007.00 # 设置日期和时间-月日时分年.秒
clock-w # 将时间修改保存到BIOS
```

## 关机(系统的关机、重启以及登出)

```bash
shutdown-hnow # 关闭系统(1)
init0 # 关闭系统(2)
telinit0 # 关闭系统(3)
shutdown-hhours:minutes & # 按预定时间关闭系统
shutdown-c # 取消按预定时间关闭系统
shutdown-rnow # 重启(1)
reboot # 重启(2)
logout # 注销
```

## 文件和目录

```bash
cd/home # 进入'/home'目录'
cd.. # 返回上一级目录
cd../.. # 返回上两级目录
cd # 进入个人的主目录
cd~ # user1进入个人的主目录
cd- # 返回上次所在的目录
pwd # 显示工作路径
ls # 查看目录中的文件
ls-F # 查看目录中的文件
ls-l # 显示文件和目录的详细资料
ls-a # 显示隐藏文件
ls*[0-9]* # 显示包含数字的文件名和目录名
tree # 显示文件和目录由根目录开始的树形结构(1)
lstree # 显示文件和目录由根目录开始的树形结构(2)
mkdirdir1 # 创建一个叫做'dir1'的目录'
mkdirdir1dir2 # 同时创建两个目录
mkdir-p/tmp/dir1/dir2 # 创建一个目录树
rm-ffile1 # 删除一个叫做'file1'的文件'
rmdirdir1 # 删除一个叫做'dir1'的目录'
rm-rfdir1 # 删除一个叫做'dir1'的目录并同时删除其内容
rm-rfdir1dir2 # 同时删除两个目录及它们的内容
mvdir1new_dir # 重命名/移动一个目录
cpfile1file2 # 复制一个文件
cpdir/*. # 复制一个目录下的所有文件到当前工作目录
cp-a/tmp/dir1. # 复制一个目录到当前工作目录
cp-adir1dir2 # 复制一个目录
ln-sfile1lnk1 # 创建一个指向文件或目录的软链接
lnfile1lnk1 # 创建一个指向文件或目录的物理链接
touch-t0712250000file1 # 修改一个文件或目录的时间戳-(YYMMDDhhmm)
filefile1outputsthemimetypeofthefileastext
iconv-l # 列出已知的编码
iconv-ffromEncoding-ttoEncodinginputFile>outputFilecreatesanewfromthegiveninputfilebyassumingitisencodedinfromEncodingandconvertingittotoEncoding.
find.-maxdepth1-name*.jpg-print-execconvert"{}"-resize80x60"thumbs/{}"\;batchresizefilesinthecurrentdirectoryandsendthemtoathumbnailsdirectory(requiresconvertfromImagemagick)
```

## 文件搜索

```bash
find/-namefile1 # 从'/'开始进入根文件系统搜索文件和目录
find/-useruser1 # 搜索属于用户'user1'的文件和目录
find/home/user1-name\*.bin # 在目录'/home/user1'中搜索带有'.bin'结尾的文件
find/usr/bin-typef-atime+100 # 搜索在过去100天内未被使用过的执行文件
find/usr/bin-typef-mtime-10 # 搜索在10天内被创建或者修改过的文件
find/-name\*.rpm-execchmod755'{}'\; # 搜索以'.rpm'结尾的文件并定义其权限
find/-xdev-name\*.rpm # 搜索以'.rpm'结尾的文件，忽略光驱、捷盘等可移动设备
locate\*.ps # 寻找以'.ps'结尾的文件-先运行'updatedb'命令
whereishalt # 显示一个二进制文件、源码或man的位置
whichhalt # 显示一个二进制文件或可执行文件的完整路径
```

## 挂载一个文件系统

```bash
mount/dev/hda2/mnt/hda2 # 挂载一个叫做hda2的盘-确定目录'/mnt/hda2'已经存在
umount/dev/hda2 # 卸载一个叫做hda2的盘-先从挂载点'/mnt/hda2'退出
fuser-km/mnt/hda2 # 当设备繁忙时强制卸载
umount-n/mnt/hda2 # 运行卸载操作而不写入/etc/mtab文件-当文件为只读或当磁盘写满时非常有用
mount/dev/fd0/mnt/floppy # 挂载一个软盘
mount/dev/cdrom/mnt/cdrom # 挂载一个cdrom或dvdrom
mount/dev/hdc/mnt/cdrecorder # 挂载一个cdrw或dvdrom
mount/dev/hdb/mnt/cdrecorder # 挂载一个cdrw或dvdrom
mount-oloopfile.iso/mnt/cdrom # 挂载一个文件或ISO镜像文件
mount-tvfat/dev/hda5/mnt/hda5 # 挂载一个WindowsFAT32文件系统
mount/dev/sda1/mnt/usbdisk # 挂载一个usb捷盘或闪存设备
mount-tsmbfs-ousername=user,password=pass//WinClient/share/mnt/share # 挂载一个windows网络共享
```

## 磁盘空间

```bash
df-h # 显示已经挂载的分区列表
ls-lSr|more # 以尺寸大小排列文件和目录
du-shdir1 # 估算目录'dir1'已经使用的磁盘空间'
du-sk*|sort-rn # 以容量大小为依据依次显示文件和目录的大小
rpm-q-a--qf'%10{SIZE}t%{NAME}n'|sort-k1,1n # 以大小为依据依次显示已安装的rpm包所使用的空间(fedora,redhat类系统)
dpkg-query-W-f='${Installed-Size;10}t${Package}n'|sort-k1,1n # 以大小为依据显示已安装的deb包所使用的空间(ubuntu,debian类系统)
```

## 用户和群组

```bash
groupaddgroup_name # 创建一个新用户组
groupdelgroup_name # 删除一个用户组
groupmod-nnew_group_nameold_group_name # 重命名一个用户组
useradd-c"NameSurname"-gadmin-d/home/user1-s/bin/bashuser1 # 创建一个属于"admin"用户组的用户
useradduser1 # 创建一个新用户
userdel-ruser1 # 删除一个用户('-r'排除主目录)
usermod-c"UserFTP"-gsystem-d/ftp/user1-s/bin/nologinuser1 # 修改用户属性
passwd # 修改口令
passwduser1 # 修改一个用户的口令(只允许root执行)
chage-E2005-12-31user1 # 设置用户口令的失效期限
pwck # 检查'/etc/passwd'的文件格式和语法修正以及存在的用户
grpck # 检查'/etc/passwd'的文件格式和语法修正以及存在的群组
newgrpgroup_name # 登陆进一个新的群组以改变新创建文件的预设群组
```

## 文件的权限-使用"+"设置权限，使用"-"用于取消

```bash
ls-lh # 显示权限
ls/tmp|pr-T5-W$COLUMNS # 将终端划分成5栏显示
chmodugo+rwxdirectory1 # 设置目录的所有人(u)、群组(g)以及其他人(o)以读（r）、写(w)和执行(x)的权限
chmodgo-rwxdirectory1 # 删除群组(g)与其他人(o)对目录的读写执行权限
chownuser1file1 # 改变一个文件的所有人属性
chown-Ruser1directory1 # 改变一个目录的所有人属性并同时改变改目录下所有文件的属性
chgrpgroup1file1 # 改变文件的群组
chownuser1:group1file1 # 改变一个文件的所有人和群组属性
find/-perm-u+s # 罗列一个系统中所有使用了SUID控制的文件
chmodu+s/bin/file1 # 设置一个二进制文件的SUID位-运行该文件的用户也被赋予和所有者同样的权限
chmodu-s/bin/file1 # 禁用一个二进制文件的SUID位
chmodg+s/home/public # 设置一个目录的SGID位-类似SUID，不过这是针对目录的
chmodg-s/home/public # 禁用一个目录的SGID位
chmodo+t/home/public # 设置一个文件的STIKY位-只允许合法所有人删除文件
chmodo-t/home/public # 禁用一个目录的STIKY位
```

## 文件的特殊属性-使用"+"设置权限，使用"-"用于取消

```bash
chattr+afile1 # 只允许以追加方式读写文件
chattr+cfile1 # 允许这个文件能被内核自动压缩/解压
chattr+dfile1 # 在进行文件系统备份时，dump程序将忽略这个文件
chattr+ifile1 # 设置成不可变的文件，不能被删除、修改、重命名或者链接
chattr+sfile1 # 允许一个文件被安全地删除
chattr+Sfile1 # 一旦应用程序对这个文件执行了写操作，使系统立刻把修改的结果写到磁盘
chattr+ufile1 # 若文件被删除，系统会允许你在以后恢复这个被删除的文件
lsattr # 显示特殊的属性
```

## 打包和压缩文件

```bash
bunzip2file1.bz2 # 解压一个叫做'file1.bz2'的文件
bzip2file1 # 压缩一个叫做'file1'的文件
gunzipfile1.gz # 解压一个叫做'file1.gz'的文件
gzipfile1 # 压缩一个叫做'file1'的文件
gzip-9file1 # 最大程度压缩
rarafile1.rartest_file # 创建一个叫做'file1.rar'的包
rarafile1.rarfile1file2dir1 # 同时压缩'file1','file2'以及目录'dir1'
rarxfile1.rar # 解压rar包
unrarxfile1.rar # 解压rar包
tar-cvfarchive.tarfile1 # 创建一个非压缩的tarball
tar-cvfarchive.tarfile1file2dir1 # 创建一个包含了'file1','file2'以及'dir1'的档案文件
tar-tfarchive.tar # 显示一个包中的内容
tar-xvfarchive.tar # 释放一个包
tar-xvfarchive.tar-C/tmp # 将压缩包释放到/tmp目录下
tar-cvfjarchive.tar.bz2dir1 # 创建一个bzip2格式的压缩包
tar-xvfjarchive.tar.bz2 # 解压一个bzip2格式的压缩包
tar-cvfzarchive.tar.gzdir1 # 创建一个gzip格式的压缩包
tar-xvfzarchive.tar.gz # 解压一个gzip格式的压缩包
zipfile1.zipfile1 # 创建一个zip格式的压缩包
zip-rfile1.zipfile1file2dir1 # 将几个文件和目录同时压缩成一个zip格式的压缩包
unzipfile1.zip # 解压一个zip格式压缩包
```

## RPM包-（Fedora,Redhat及类似系统）

```bash
rpm-ivhpackage.rpm # 安装一个rpm包
rpm-ivh--nodeepspackage.rpm # 安装一个rpm包而忽略依赖关系警告
rpm-Upackage.rpm # 更新一个rpm包但不改变其配置文件
rpm-Fpackage.rpm # 更新一个确定已经安装的rpm包
rpm-epackage_name.rpm # 删除一个rpm包
rpm-qa # 显示系统中所有已经安装的rpm包
rpm-qa|grephttpd # 显示所有名称中包含"httpd"字样的rpm包
rpm-qipackage_name # 获取一个已安装包的特殊信息
rpm-qg"SystemEnvironment/Daemons" # 显示一个组件的rpm包
rpm-qlpackage_name # 显示一个已经安装的rpm包提供的文件列表
rpm-qcpackage_name # 显示一个已经安装的rpm包提供的配置文件列表
rpm-qpackage_name--whatrequires # 显示与一个rpm包存在依赖关系的列表
rpm-qpackage_name--whatprovides # 显示一个rpm包所占的体积
rpm-qpackage_name--scripts # 显示在安装/删除期间所执行的脚本l
rpm-qpackage_name--changelog # 显示一个rpm包的修改历史
rpm-qf/etc/httpd/conf/httpd.conf # 确认所给的文件由哪个rpm包所提供
rpm-qppackage.rpm-l # 显示由一个尚未安装的rpm包提供的文件列表
rpm--import/media/cdrom/RPM-GPG-KEY # 导入公钥数字证书
rpm--checksigpackage.rpm # 确认一个rpm包的完整性
rpm-qagpg-pubkey # 确认已安装的所有rpm包的完整性
rpm-Vpackage_name # 检查文件尺寸、许可、类型、所有者、群组、MD5检查以及最后修改时间
rpm-Va # 检查系统中所有已安装的rpm包-小心使用
rpm-Vppackage.rpm # 确认一个rpm包还未安装
rpm2cpiopackage.rpm|cpio--extract--make-directories*bin* # 从一个rpm包运行可执行文件
rpm-ivh/usr/src/redhat/RPMS/`arch`/package.rpm # 从一个rpm源码安装一个构建好的包
rpmbuild--rebuildpackage_name.src.rpm # 从一个rpm源码构建一个rpm包
```

## YUM软件包升级器-（Fedora,RedHat及类似系统）

```bash
yuminstallpackage_name # 下载并安装一个rpm包
yumlocalinstallpackage_name.rpm # 将安装一个rpm包，使用你自己的软件仓库为你解决所有依赖关系
yumupdatepackage_name.rpm # 更新当前系统中所有安装的rpm包
yumupdatepackage_name # 更新一个rpm包
yumremovepackage_name # 删除一个rpm包
yumlist # 列出当前系统中安装的所有包
yumsearchpackage_name # 在rpm仓库中搜寻软件包
yumcleanpackages # 清理rpm缓存删除下载的包
yumcleanheaders # 删除所有头文件
yumcleanall # 删除所有缓存的包和头文件
```

## DEB包(Debian,Ubuntu以及类似系统)

```bash
dpkg-ipackage.deb # 安装/更新一个deb包
dpkg-rpackage_name # 从系统删除一个deb包
dpkg-l # 显示系统中所有已经安装的deb包
dpkg-l|grephttpd # 显示所有名称中包含"httpd"字样的deb包
dpkg-spackage_name # 获得已经安装在系统中一个特殊包的信息
dpkg-Lpackage_name # 显示系统中已经安装的一个deb包所提供的文件列表
dpkg--contentspackage.deb # 显示尚未安装的一个包所提供的文件列表
dpkg-S/bin/ping # 确认所给的文件由哪个deb包提供
```

## APT软件工具(Debian,Ubuntu以及类似系统)

```bash
apt-getinstallpackage_name # 安装/更新一个deb包
apt-cdrominstallpackage_name # 从光盘安装/更新一个deb包
apt-getupdate # 升级列表中的软件包
apt-getupgrade # 升级所有已安装的软件
apt-getremovepackage_name # 从系统删除一个deb包
apt-getcheck # 确认依赖的软件仓库正确
apt-getclean # 从下载的软件包中清理缓存
apt-cachesearchsearched-package # 返回包含所要搜索字符串的软件包名称
```

## 查看文件内容

```bash
catfile1 # 从第一个字节开始正向查看文件的内容
tacfile1 # 从最后一行开始反向查看一个文件的内容
morefile1 # 查看一个长文件的内容
lessfile1 # 类似于'more'命令，但是它允许在文件中和正向操作一样的反向操作
head-2file1 # 查看一个文件的前两行
tail-2file1 # 查看一个文件的最后两行
tail-f/var/log/messages # 实时查看被添加到一个文件中的内容
```

## 文本处理

```bash
catfile1file2...|command<>file1_in.txt_or_file1_out.txtgeneralsyntaxfortextmanipulationusingPIPE,STDINandSTDOUT
catfile1|command(sed,grep,awk,grep,etc...)>result.txt # 合并一个文件的详细说明文本，并将简介写入一个新文件中
catfile1|command(sed,grep,awk,grep,etc...)>>result.txt # 合并一个文件的详细说明文本，并将简介写入一个已有的文件中
grepAug/var/log/messages # 在文件'/var/log/messages'中查找关键词"Aug"
grep^Aug/var/log/messages # 在文件'/var/log/messages'中查找以"Aug"开始的词汇
grep[0-9]/var/log/messages # 选择'/var/log/messages'文件中所有包含数字的行
grepAug-R/var/log/* # 在目录'/var/log'及随后的目录中搜索字符串"Aug"
sed's/stringa1/stringa2/g'example.txt # 将example.txt文件中的"string1"替换成"string2"
sed'/^$/d'example.txt # 从example.txt文件中删除所有空白行
sed'/*#/d;/^$/d'example.txt从example.txt # 文件中删除所有注释和空白行
echo'esempio'|tr'[:lower:]''[:upper:]' # 合并上下单元格内容
sed-e'1d'result.txt # 从文件example.txt中排除第一行
sed-n'/stringa1/p' # 查看只包含词汇"string1"的行
sed-e's/*$//'example.txt # 删除每一行最后的空白字符
sed-e's/stringa1//g'example.txt # 从文档中只删除词汇"string1"并保留剩余全部
sed-n'1,5p;5q'example.txt # 查看从第一行到第5行内容
sed-n'5p;5q'example.txt # 查看第5行
sed-e's/00*/0/g' # example.txt用单个零替换多个零
cat-nfile1 # 标示文件的行数
catexample.txt|awk'NR%2==1' # 删除example.txt文件中的所有偶数行
echoabc|awk'{print$1}' # 查看一行第一栏
echoabc|awk'{print$1,$3}' # 查看一行的第一和第三栏
pastefile1file2 # 合并两个文件或两栏的内容
paste-d'+'file1file2 # 合并两个文件或两栏的内容，中间用"+"区分
sortfile1file2 # 排序两个文件的内容
sortfile1file2|uniq # 取出两个文件的并集(重复的行只保留一份)
sortfile1file2|uniq-u # 删除交集，留下其他的行
sortfile1file2|uniq-d # 取出两个文件的交集(只留下同时存在于两个文件中的文件)
comm-1file1file2 # 比较两个文件的内容只删除'file1'所包含的内容
comm-2file1file2 # 比较两个文件的内容只删除'file2'所包含的内容
comm-3file1file2 # 比较两个文件的内容只删除两个文件共有的部分
```

## 字符设置和文件格式转换

```bash
dos2unixfiledos.txtfileunix.txt # 将一个文本文件的格式从MSDOS转换成UNIX
unix2dosfileunix.txtfiledos.txt # 将一个文本文件的格式从UNIX转换成MSDOS
recode..HTML<page.txt>page.html # 将一个文本文件转换成html
recode-l|more # 显示所有允许的转换格式
```

## 文件系统分析

```bash
badblocks-v/dev/hda1 # 检查磁盘hda1上的坏磁块
fsck/dev/hda1 # 修复/检查hda1磁盘上linux文件系统的完整性
fsck.ext2/dev/hda1 # 修复/检查hda1磁盘上ext2文件系统的完整性
e2fsck/dev/hda1 # 修复/检查hda1磁盘上ext2文件系统的完整性
e2fsck-j/dev/hda1 # 修复/检查hda1磁盘上ext3文件系统的完整性
fsck.ext3/dev/hda1 # 修复/检查hda1磁盘上ext3文件系统的完整性
fsck.vfat/dev/hda1 # 修复/检查hda1磁盘上fat文件系统的完整性
fsck.msdos/dev/hda1 # 修复/检查hda1磁盘上dos文件系统的完整性
dosfsck/dev/hda1 # 修复/检查hda1磁盘上dos文件系统的完整性
```

## 初始化一个文件系统

```bash
mkfs/dev/hda1 # 在hda1 # 分区创建一个文件系统
mke2fs/dev/hda1 # 在hda1分区创建一个linuxext2的文件系统
mke2fs-j/dev/hda1 # 在hda1分区创建一个linuxext3(日志型)的文件系统
mkfs-tvfat32-F/dev/hda1 # 创建一个FAT32文件系统
fdformat-n/dev/fd0 # 格式化一个软盘
mkswap/dev/hda3 # 创建一个swap文件系统
```

## SWAP文件系统

```bash
mkswap/dev/hda3 # 创建一个swap文件系统
swapon/dev/hda3 # 启用一个新的swap文件系统
swapon/dev/hda2/dev/hdb3 # 启用两个swap分区
```

## 备份

```bash
dump-0aj-f/tmp/home0.bak/home # 制作一个'/home'目录的完整备份
dump-1aj-f/tmp/home0.bak/home # 制作一个'/home'目录的交互式备份
restore-if/tmp/home0.bak # 还原一个交互式备份
rsync-rogpav--delete/home/tmp # 同步两边的目录
rsync-rogpav-essh--delete/homeip_address:/tmp # 通过SSH通道rsync
rsync-az-essh--deleteip_addr:/home/public/home/local # 通过ssh和压缩将一个远程目录同步到本地目录
rsync-az-essh--delete/home/localip_addr:/home/public # 通过ssh和压缩将本地目录同步到远程目录
ddbs=1Mif=/dev/hda|gzip|sshuser@ip_addr'ddof=hda.gz' # 通过ssh在远程主机上执行一次备份本地磁盘的操作
ddif=/dev/sdaof=/tmp/file1 # 备份磁盘内容到一个文件
tar-Pufbackup.tar/home/user # 执行一次对'/home/user'目录的交互式备份操作
(cd/tmp/local/&&tarc.)|ssh-Cuser@ip_addr'cd/home/share/&&tarx-p' # 通过ssh在远程目录中复制一个目录内容
(tarc/home)|ssh-Cuser@ip_addr'cd/home/backup-home&&tarx-p' # 通过ssh在远程目录中复制一个本地目录
tarcf-.|(cd/tmp/backup;tarxf-) # 本地将一个目录复制到另一个地方，保留原有权限及链接
find/home/user1-name'*.txt'|xargscp-av--target-directory=/home/backup/--parents # 从一个目录查找并复制所有以'.txt' # 结尾的文件到另一个目录
find/var/log-name'*.log'|tarcv--files-from=-|bzip2>log.tar.bz2 # 查找所有以'.log'结尾的文件并做成一个bzip包
ddif=/dev/hdaof=/dev/fd0bs=512count=1 # 做一个将MBR(MasterBootRecord)内容复制到软盘的动作
ddif=/dev/fd0of=/dev/hdabs=512count=1 # 从已经保存到软盘的备份中恢复MBR内容
```

## 光盘

```bash
cdrecord-vgracetime=2dev=/dev/cdrom-ejectblank=fast-force # 清空一个可复写的光盘内容
mkisofs/dev/cdrom>cd.iso # 在磁盘上创建一个光盘的iso镜像文件
mkisofs/dev/cdrom|gzip>cd_iso.gz # 在磁盘上创建一个压缩了的光盘iso镜像文件
mkisofs-J-allow-leading-dots-R-V"LabelCD"-iso-level4-o./cd.isodata_cd # 创建一个目录的iso镜像文件
cdrecord-vdev=/dev/cdromcd.iso # 刻录一个ISO镜像文件
gzip-dccd_iso.gz|cdrecorddev=/dev/cdrom- # 刻录一个压缩了的ISO镜像文件
mount-oloopcd.iso/mnt/iso # 挂载一个ISO镜像文件
cd-paranoia-B # 从一个CD光盘转录音轨到wav文件中
cd-paranoia--"-3" # 从一个CD光盘转录音轨到wav文件中（参数-3）
cdrecord--scanbus # 扫描总线以识别scsi通道
ddif=/dev/hdc|md5sum # 校验一个设备的md5sum编码，例如一张CD
```

## 网络-（以太网和WIFI无线）

```bash
ifconfigeth0 # 显示一个以太网卡的配置
ifupeth0 # 启用一个'eth0'网络设备
ifdowneth0 # 禁用一个'eth0'网络设备
ifconfigeth0192.168.1.1netmask255.255.255.0 # 控制IP地址
ifconfigeth0promisc # 设置'eth0'成混杂模式以嗅探数据包(sniffing)
dhclienteth0 # 以dhcp模式启用'eth0'
route-nshowroutingtable
routeadd-net0/0gwIP_Gatewayconfiguradefaultgateway
routeadd-net192.168.0.0netmask255.255.0.0gw192.168.1.1configurestaticroutetoreachnetwork'192.168.0.0/16'
routedel0/0gwIP_gatewayremovestaticroute
echo"1">/proc/sys/net/ipv4/ip_forwardactivateiprouting
hostnameshowhostnameofsystem
hostwww.example.comlookuphostnametoresolvenametoipaddressandviceversa(1)
nslookupwww.example.comlookuphostnametoresolvenametoipaddressandviceversa(2)
iplinkshowshowlinkstatusofallinterfaces
mii-tooleth0showlinkstatusof'eth0'
ethtooleth0showstatisticsofnetworkcard'eth0'
netstat-tupshowallactivenetworkconnectionsandtheirPID
netstat-tuplshowallnetworkserviceslisteningonthesystemandtheirPID
tcpdumptcpport80showallHTTPtraffic
iwlistscanshowwirelessnetworks
iwconfigeth1showconfigurationofawirelessnetworkcard
hostnameshowhostname
hostwww.example.comlookuphostnametoresolvenametoipaddressandviceversa
nslookupwww.example.comlookuphostnametoresolvenametoipaddressandviceversa
whoiswww.example.comlookuponWhoisdatabase
```

## JPS工具

```bash
jps(JavaVirtualMachineProcessStatusTool)是JDK1.5提供的一个显示当前所有java进程pid的命令，简单实用，非常适合在linux/unix平台上简单察看当前java进程的一些简单情况。

我想很多人都是用过unix系统里的ps命令，这个命令主要是用来显示当前系统的进程情况，有哪些进程，及其id。jps也是一样，它的作用是显示当前系统的java进程情况，及其id号。我们可以通过它来查看我们到底启动了几个java进程（因为每一个java程序都会独占一个java虚拟机实例），和他们的进程号（为下面几个程序做准备），并可通过opt来查看这些进程的详细启动参数。

使用方法：在当前命令行下打jps(需要JAVA_HOME，没有的话，到改程序的目录下打)。

jps存放在JAVA_HOME/bin/jps，使用时为了方便请将JAVA_HOME/bin/加入到Path.

$>jps
23991Jps
23789BossMain
23651Resin

比较常用的参数：

-q只显示pid，不显示class名称,jar文件名和传递给main方法的参数
$>jps-q
28680
23789
23651

-m输出传递给main方法的参数，在嵌入式jvm上可能是null

$>jps-m
28715Jps-m
23789BossMain
23651Resin-socketwait32768-stdout/data/aoxj/resin/log/stdout.log-stderr/data/aoxj/resin/log/stderr.log

-l输出应用程序mainclass的完整package名或者应用程序的jar文件完整路径名

$>jps-l
28729sun.tools.jps.Jps
23789com.asiainfo.aimc.bossbi.BossMain
23651com.caucho.server.resin.Resin

-v输出传递给JVM的参数

$>jps-v
23789BossMain
28802Jps-Denv.class.path=/data/aoxj/bossbi/twsecurity/java/trustwork140.jar:/data/aoxj/bossbi/twsecurity/java/:/data/aoxj/bossbi/twsecurity/java/twcmcc.jar:/data/aoxj/jdk15/lib/rt.jar:/data/aoxj/jd

k15/lib/tools.jar-Dapplication.home=/data/aoxj/jdk15-Xms8m
23651Resin-Xss1m-Dresin.home=/data/aoxj/resin-Dserver.root=/data/aoxj/resin-Djava.util.logging.manager=com.caucho.log.LogManagerImpl-

Djavax.management.builder.initial=com.caucho.jmx.MBeanServerBuilderImpl

sudojps看到的进程数量最全

jps192.168.0.77

列出远程服务器192.168.0.77机器所有的jvm实例，采用rmi协议，默认连接端口为1099

（前提是远程服务器提供jstatd服务）

注：jps命令有个地方很不好，似乎只能显示当前用户的java进程，要显示其他用户的还是只能用unix/linux的ps命令。
```