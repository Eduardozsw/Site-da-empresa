'use client'

import Image from "next/image";
import Logo from "@/assets/Logo.png"
import Link from 'next/link'
import time from "@/assets/Image.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

export default function Home() {
  return (
    <main className="">
      <nav className="flex flex-wrap items-center justify-around mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse"> {/* tag a ta servindo pra "alinhar" o texto*/}
          <Image alt="Imagem da logo" width={32} height={32} src={Logo} />
          <span className="self-center text-1xl font-semibold whitespace-nowrap">OptimusTech</span>
        </a>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href='/' className="text-1xl font-semibold">Home</Link>
          <Link href='/' className="text-1xl font-semibold">Produtos</Link>
          <Link href='/' className="text-1xl font-semibold">Recursos</Link>
          <Link href='/' className="text-1xl font-semibold">Sobre nós</Link>
        </a>
        <a className="space-x-3">
          <Link href='/' className="text-1xl font-semibold">Entrar</Link>
          <Link href='/' className="buto text-1xl font-semibold p-3 rounded-lg text-white">Cadastrar</Link>
        </a>
      </nav>
      <section className=" p-20 flex flex-col justify-center items-center">
        <h1 className="sobre font-semibold">Sobre nós</h1>
        <h1 className="p-4 text-5xl font-bold">Por que somos diferentes?</h1>
        <h1 className="text-center">Nós focamos nos detalhes de tudo que fazemos.
          Tudo para ajudar as empresas de<br /> todo o mundo a se concentrarem
          naquilo que é realmente importante para elas.</h1>
      </section>
      <section className="pt-30 flex flex-wrap justify-around px-10 items-center">
        <div>
          <h1 className="color text-7xl font-normal text-bold ">400+</h1>
          <a>Projetos concluídos</a>
          <p>Nós ajudamos a construir mais de<br /> 400 projetos incríveis.</p>
        </div>
        <div>
          <h1 className="color text-7xl font-normal text-bold ">100+</h1>
          <a>Colaboradores</a>
          <p>Temos mais de 100 colaboradores<br />no nosso time que se preocupam<br />com nossos clientes.</p>
        </div>
        <div>
          <h1 className="color text-7xl font-normal text-bold ">20k</h1>
          <a>Downloads</a>
          <p>Nossos projetos que estão<br /> disponíveis em lojas já foram<br /> baixados mais de 20.000 vezes.</p>
        </div>
        <div>
          <h1 className="color text-7xl font-normal text-bold ">500+</h1>
          <a>Reviews 5 estrelas</a>
          <p>Estamos orgulhosos de contar com<br /> mais de 500 reviews 5 estrelas em<br /> nossos produtos.</p>
        </div>
      </section>
      <section className=" font-semibold pt-20 flex flex-col justify-center items-center">
        <h1 className="color">Vagas abertas!</h1> {/*faltando background, não consegui deixar como no figma*/}
        <h1 className="text-4xl text-bold">Estamos procurando por talentos</h1>
        <h1 className="seccolor text-2xl pt-3 font-light">Somos uma equipe 100% remota com pessoas do Brasil inteiro</h1>
        <Image alt="" width={1216} height={400} src={time}></Image>
      </section>
      {/*Design*/}
      <div className="flex flex-col px-80 justify-center items-center gap-6">
        <h1 className="seccolor font-bold text-2xl">Design</h1>
      </div>
      <section className="flex flex-col px-80 justify-center items-center gap-6">

        <div className="border-2 w-[700px] rounded-lg">
          <a href="#" className="flex flex-col p-10">
            <h1 className="font-bold text-2xl">Product Designer</h1>
            <a href="" className="flex flex-wrap pt-5">
              <h1 className="font-semibold">Full-time</h1>
              <h1 className="pl-20">Faixa salarial: R$7.000</h1>
            </a>
          </a>
        </div>
        <div className="border-2 w-[700px] rounded-lg">
          <a href="#" className="flex flex-col p-10">
            <h1 className="font-bold text-2xl">UX Designer</h1>
            <a href="" className="flex flex-wrap pt-5">
              <h1 className="font-semibold">Full-time</h1>
              <h1 className="pl-20">Faixa salarial: R$6.000</h1>
            </a>
          </a>
        </div>
      </section>
      {/*Desenvolvimento de software*/}
      <div className="flex flex-col px-80 justify-center items-center gap-6">
        <h1 className="seccolor font-bold text-2xl">Design</h1>
      </div>
      <section className="flex flex-col px-80 justify-center items-center gap-6">

        <div className="border-2 w-[700px] rounded-lg">
          <a href="#" className="flex flex-col p-10">
            <h1 className="font-bold text-2xl">Desenvolvedor(a) iOS</h1>
            <a href="" className="flex flex-wrap pt-5">
              <h1 className="font-semibold">Full-time</h1>
              <h1 className="pl-20">Faixa salarial: R$10.000</h1>
            </a>
          </a>
        </div>
        <div className="border-2 w-[700px] rounded-lg">
          <a href="#" className="flex flex-col p-10">
            <h1 className="font-bold text-2xl">Desenvolvedor(a) Front-end</h1>
            <a href="" className="flex flex-wrap pt-5">
              <h1 className="font-semibold">Full-time</h1>
              <h1 className="pl-20">Faixa salarial: R$7.000</h1>
            </a>
          </a>
        </div>
        <div className="border-2 w-[700px] rounded-lg">
          <a href="#" className="flex flex-col p-10">
            <h1 className="font-bold text-2xl">Desenvolvedor(a) Back-end</h1>
            <a href="" className="flex flex-wrap pt-5">
              <h1 className="font-semibold">Full-time</h1>
              <h1 className="pl-20">Faixa salarial: R$8.000</h1>
            </a>
          </a>
        </div>
      </section>
      <Splide className='p-20'>
        <SplideSlide className='flex justify-center items-center'>
          <img src="/images/Content.png" alt="Image 1" className='' />
        </SplideSlide>
        <SplideSlide className='flex justify-center items-center'>
          <img src="/images/Content.png" alt="Image 1" className='' />
        </SplideSlide>
        <SplideSlide className='flex justify-center items-center'>
          <img src="/images/Content.png" alt="Image 1" className='' />
        </SplideSlide>
      </Splide>
      <footer className="cor flex flex-col justify-center items-center ">
        <h1 className="font-bold text-2xl pt-6">Acompanhe as nossas oportunidades</h1>
        <p className="pt-6">Seja o primeiro a saber quando novas vagas serão abertas!</p>
        <div className=" flex align-middle items-center pt-3">
          <input type="text" name="email" placeholder="Seu e-mail" className="font-2xl p-2 border-2 w-[275px] rounded-lg" />
          <input type="submit" className="buto p-2 ml-4 rounded-lg" />
        </div>
        <p className="font-extralight text-xs pt-6 pb-10">© 2022 OptimusTech. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
