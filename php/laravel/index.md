# Apuntes Laravel

## Para debuguear con php
```sh
## Se puede inspeccionar variables
<?php var_dump($tasks) ?> 

```

## LARAVEL class
```sh
dd($variable_a_debugar);           # Para debuguear variables

# Para crear una instancia de una clase
$obj = new DB();
$obj->llamadaMetodo();             

## Llamada método estático
 DB::llamadaMetodo();
```


# LARAVEL eloquent - ORM

```sh

->get();                            # Retorna un array
->firts();                          # Retorna un objecto( diccionario )


```

## Comandos artisan
```sh
php artisan make:migration              # Para crear migraciones
php artisan migrate                     # Para ejecutar la migración
php artisan migrate:fresh               # Para ejecutar la migración, borra los registros de la DB y recarga la Bases de Datos
php artisan migrate:fresh --seed        # Para ejecutar la migración, borra los registros de la DB y recarga la Bases de Datos
php artisan make:model                  # Crea Modelos
php artisan make:controller             # Crea Controladores
php artisan make:request                # Crea Form Request    
php artisan make:notifications-table    # Crea la tabla notifications (NO la migra a la DB) Notificaciones luego se hace el migrate (php artisan migrate)  
php artisan make:notification           # Crea una clase Notification (IdeaPublished)   
php artisan config:clear                # Borra la configuración del .env si se modifica
php artisan queue:work                  # Colas de trabajos
php artisan make:job                    # Crea Colas de trabajos
```

# CRUD

```sh

index        Muestra la lista de registros( todos, con filtro )
show         Muestra UN dato 
create       Muestra la vista (Formulario para creación)
store        Guarda los datos del Create (Unido con el Create)
edit         Muestra la vista (Formulario para editar) 
update       Actualiza los datos de Edit (Unido con Edit)
destroy      Elimina UN dato (Está unido con Index)     

```

# Pest - Testear el proyecto (https://pestphp.com/docs/installation)

```sh
composer remove phpunit/phpunit
composer require pestphp/pest --dev --with-all-dependencies

./vendor/bin/pest --init

./vendor/bin/pest tests/Browser/AuthTest.php

```


# Configuración del proyecto en Plesk

```sh
Crear subdominio en IONOS
Crear subdominio en Plesk
Configurar certifcados SSL en Plesk
Clonar y configurar el git
Agregar el webhook Plesk -> GitHub
Añadir la BBDD en Plesk

Conectar vía ssh:

- composer install
- cp -env.example .env
- php artisan key:generate
- php artisan config:clear
- php artisan migrate
- php artisan migrate:fresh --seed


```

# Configuración de MySQL + Seeders en Laravel

````sh
# Laravel + MySQL + Seeders

## 1. Instalar e iniciar MySQL

```bash
brew install mysql
brew services start mysql
````

Verificar:

```bash
brew services list
```

---

## 2. Crear base de datos

Entrar a MySQL:

```bash
mysql -u root
```

Crear BBDD:

```sql
CREATE DATABASE practicas_mile;
```

Salir:

```sql
exit;
```

---

## 3. Configurar `.env`

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=practicas_mile
DB_USERNAME=root
DB_PASSWORD=
```

---

## 4. Ejecutar migraciones

```bash
php artisan config:clear
php artisan migrate
```

---

# Crear Roles en Users

## 5. Crear migración

```bash
php artisan make:migration add_role_to_users_table --table=users
```

Editar migración:

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('role')->default('user');
});
```

Ejecutar:

```bash
php artisan migrate
```

---

# Seeders

## 6. Crear Seeder

```bash
php artisan make:seeder UserSeeder
```

---

## 7. Configurar `UserSeeder`

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@test.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('12345678'),
                'role' => 'admin',
            ]
        );

        User::updateOrCreate(
            ['email' => 'manager@test.com'],
            [
                'name' => 'Manager',
                'password' => Hash::make('12345678'),
                'role' => 'manager',
            ]
        );

        User::updateOrCreate(
            ['email' => 'user@test.com'],
            [
                'name' => 'User',
                'password' => Hash::make('12345678'),
                'role' => 'user',
            ]
        );
    }
}
```

---

## 8. Registrar Seeder

`database/seeders/DatabaseSeeder.php`

```php
$this->call([
    UserSeeder::class,
]);
```

---

## 9. Ejecutar Seeder

```bash
php artisan db:seed
```

---

# Usuarios de prueba

```text
admin@test.com
12345678
```

```text
manager@test.com
12345678
```

```text
user@test.com
12345678

```

# Instalar API en Laravel

```sh
# Instalar API/Sanctum
- php artisan install:api

# Ejecutar migraciones nuevas
- php artisan migrate


```

# Guia - Mile (PHP)

## Contruir el contenedor
docker compose up -d --build

## Entrar al servidor en docker
docker compose exec app bash

## Instalar Laravel
- Crear en el workspace una carpeta "temp" y luego en el terminal ejecutar este comando:
      composer create-project laravel/laravel . 
- Luego mover el contenido al destino con archivos ocultos


## Comandos Laravel a ejecutar

## Crear el .env
cp .env.example .env

php artisan key:generate


entrar al .env y modificar estas lineas

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=itrip
DB_USERNAME=itrip
DB_PASSWORD=itrip



