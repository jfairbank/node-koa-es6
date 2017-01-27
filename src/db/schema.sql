create extension if not exists "uuid-ossp";

drop table if exists movies;

create table movies
(
    id uuid default uuid_generate_v4() primary key,
    title text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
