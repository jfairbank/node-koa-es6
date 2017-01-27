create extension if not exists "uuid-ossp";

drop table if exists movie;
drop table if exists director;

create table director
(
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table movie
(
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    image text,
    description text not null,
    director_id uuid references director(id),
    released timestamptz not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
