create database BD_Portfolio_Matias;
use BD_Portfolio_Matias;

-- Usuario

create table Usuarios(
id_Usuario int primary key auto_increment,
Nombre varchar(50),
Apellido varchar(50),
Email varchar(250),
Contraseña varchar(50),
Activo boolean default false
);

select * From Usuarios;
insert into Usuarios(Nombre,Apellido,Email,Contraseña,Activo) values("Matias","Chocobar","chocobar_matias@yahoo.com.ar","Programadormia9292",true);
insert into Usuarios(Nombre,Apellido,Email,Contraseña,Activo) values("Natalia","Rodigruez","deborahnatalia84@hotmail.com","DiseñadoraLic9505",true);
insert into Usuarios(Nombre,Apellido,Email,Contraseña,Activo) values("admin","prueba","pruebaadmin@prueba.com","admin",false);

drop table Usuarios;

-- Admin

create table Administradores(
id_Adminitrador int primary key auto_increment,
Admin_trador boolean default false,
id_Usuario int,
foreign key(id_Usuario) references Usuarios(id_Usuario)
);

select*from Administradores;
insert into Administradores(Admin_trador,id_Usuario) value(true,1);
insert into Administradores(Admin_trador,id_Usuario) value(true,2);
insert into Administradores(Admin_trador,id_Usuario) value(false,3);
insert into Administradores(Admin_trador,id_Usuario) value(true,4);

-- Formacion

Create Table Formaciones(
id_Formacion int primary key auto_increment,
Titulo varchar(50),
InstitucionEducativa varchar(50),
AñoInicio date,
AñoFinEstimado date,
Estado varchar(50),
Logo varchar(250),
id_Adminitrador int,
foreign key(id_Adminitrador) references Administradores(id_Adminitrador)
);

drop table Formaciones;

-- Experiencia

create table Experiencias(
id_Experiencia int primary key auto_increment,
Cargo varchar(250),
Empresa varchar(250),
AñoInicio date,
AñoFinal date,
EstadoActual varchar(250),
Desempeño varchar(250),
id_Adminitrador int,
foreign key(id_Adminitrador) references Administradores(id_Adminitrador)
);

drop table Experiencias;

-- Idioma

create table Idiomas(
id_Idioma int primary key auto_increment,
IdiomaNuevo varchar(100),
Nivel varchar(50),
id_Adminitrador int,
foreign key(id_Adminitrador) references Administradores(id_Adminitrador)
);

drop table Idiomas;

-- Certificacion

create table Certificaciones(
id_Certificacion int primary key auto_increment,
Titulo varchar(250),
InstitucionEducativa varchar(250),
AñoInicio date,
HorasAcademica varchar(50),
Codigo varchar(250),
Url varchar(250),
FotoCertificado varchar(250),
id_Adminitrador int,
foreign key(id_Adminitrador) references Administradores(id_Adminitrador)
);

drop table Certificaciones;

-- Skill

create table Skills(
id_Skill int primary key auto_increment,
NombreSkill varchar(250),
id_Adminitrador int,
foreign key(id_Adminitrador) references Administradores(id_Adminitrador)
);

drop table Skills;

-- Proyectos

create table Proyectos(
id_Proyecto int primary key auto_increment,
NombreProyecto varchar(250),
Descripcion varchar(300),
Repositorio varchar(250), 
id_Adminitrador int,
foreign key(id_Adminitrador) references Administradores(id_Adminitrador)
);

drop table Proyectos;

-- Contactame

create table Contactame(
id_Contactame int primary key auto_increment,
Nombre varchar(50),
Email varchar(100),
Empresa varchar(250),
Motivo varchar(50),
Comentario varchar(500),
id_Adminitrador int,
foreign key(id_Adminitrador) references Administradores(id_Adminitrador)
);

drop table Contactame;