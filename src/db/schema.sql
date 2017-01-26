drop table if exists movies;

create table movies
(
    id serial primary key,
    title text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
