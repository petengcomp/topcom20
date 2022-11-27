import styles from '../styles/pages/History.module.css';
import Image from 'next/image';

import { Navbar } from "../components/Navbar";
import { HistoryBox } from "../components/HistoryBox";
import { HistoryBoxMobile } from "../components/HistoryBoxMobile";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import bodyImage1 from '../assets/bodyImage1.png'
import topcom20 from "../assets/topcom logos/topcom20.png"

import { balloons } from '../imports/balloons';
import { logos } from '../imports/logos';
import ImageBanner from '../components/ImageBanner';
import ScrollUpButton from '../components/ScrollUpButton';

export default function History() {
  return (
    <div className={styles.historyPage}>
      <Navbar fromParentSelected={4} />

      <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Imagem de corpo do site' />

      <Header text="NOSSA HISTÓRIA" />

      <ScrollUpButton />

      <div className={styles.contentRow}>
        <div className={styles.contentColumn}>
          <HistoryBox title="Topcom 1 e Topcom 2"
            ano={[1997, 1999]}
            description="Participaram 10 equipes formadas por alunos dos cursos de Engenharia e/ou Ciências da Computação. 
                              As linguagens de programação permitidas eram C, Pascal e Modula-2. 
                              A premiação aos vencedores foi o acesso grátis (porém limitado) à internet para cada integrante da equipe vencedora."
            balloonPosition="right"
            balloonImage={balloons[0]}
          />
          <HistoryBox title="Topcom 4"
            image={logos[1]}
            ano={[2005]}
            description="Apesar de não ter sido um evento de grande porte, marcou o início da periodicidade do torneio, tornando-se um evento anual."
            balloonPosition="right"
            balloonImage={balloons[2]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom4"
          />
          <HistoryBox title="Topcom 6"
            ano={[2008]}
            image={logos[3]}
            description="Contou com a participação de 10 equipes da UFES e 2 da UVV. 
                              Como premiação, as três primeiras equipes tiveram suas inscrições pagas na Maratona de Programação 
                              e a primeira colocada ainda ganhou um bonus de R$ 300,00 na compra de livros científicos. 
                              Ainda nesse ano, o PET também realizou a fase regional da Maratona de Programação na UFES. 
                              Participaram desse evento, 4 equipes da UFES, 2 da FAESA e 2 da UVV. 
                              A equipe NULL, vencedora da fase regional, ficou em 4° lugar na final nacional, conquistando assim, o direito de ir para a final mundial 
                              em Estocolmo na Suécia. Nunca uma equipe da UFES havia se classificado para as finais mundiais!"
            balloonPosition="right"
            balloonImage={balloons[4]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom6"
          />
          <HistoryBox title="Topcom 8"
            ano={[2010]}
            image={logos[5]}
            description="Em 2010 foram 26 equipes inscritas (recorde de participantes). 
                              Na edições o evento foi patrocinado pela empresa ISH Tecnologia. 
                              As três melhores equipes foram inscritas na fase regional da Maratona de Programação, sendo sempre uma delas 
                              classificada para a final nacional, realizada em Joinville-SC. Uma das equipes ficou em 15º lugar, 
                              destacando o Espírito Santo com bons resultados entre as melhores equipes do Brasil."
            balloonPosition="right"
            balloonImage={balloons[6]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom8"
          />
          <HistoryBox title="Topcom 10"
            ano={[2012]}
            image={logos[7]}
            description="O Topcom 10, assim como em 2010 e 2011, tiveram 26 equipes inscritas. 
                              Nas três edições o evento (2010, 2011 e 2012) foi patrocinado pela empresa ISH Tecnologia. 
                              As três melhores equipes foram inscritas na fase regional da Maratona de Programação, 
                              sendo sempre uma delas classificada para a final nacional, realizada em 
                              Joinville-SC (2010) e Goiânia-GO (2011 e 2012). As equipes ficaram em 15º, 23º e 30º lugar respectivamente."
            balloonPosition="right"
            balloonImage={balloons[8]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom10"
          />
          <HistoryBox title="Topcom 12"
            ano={[2014]}
            description="Contou novamente com o patrocínio da VIXTeam, além do novo apoio da XPD, empresa relativamente nova no ramo 
                              capixaba de tecnologia. Nessa edição participaram 24 equipes, e novamente uma equipe formada por alunos do ensino médio 
                              venceu o torneio. Assim como em 2013, a equipe DoDadalto não pôde ser inscrita na Maratona. 
                              A equipe TLE, formada por alunos do campus de São Matheus, ficou em 31º lugar entre as 58 equipes na final brasileira."
            balloonPosition="right"
            balloonImage={balloons[10]}
          />
          <HistoryBox title="Topcom 14"
            ano={[2016]}
            image={logos[10]}
            description="O Topcom 14 contou com o patrocínio da VIXTeam e da Resultate. 
                              Foi um dos anos com maior número de participantes entre todas as edições: 33 equipes, 99 competidores. 
                              A equipe TLE da UFES Campus São Mateus ficou em 1º Lugar seguida da equipe No UVA Passa da UFES e a 
                              equipe Triplex do Lula também da UFES em 3º Lugar."
            balloonPosition="right"
            balloonImage={balloons[12]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom14"
          />
          <HistoryBox title="Topcom 16"
            ano={[2018]}
            image={logos[12]}
            description="O Topcom 16 contou com o patrocínio da Resultate, Wine e Seeds. Assim como na edição anterior, 
                              tiveram 34 equipes, sendo 102 participantes. Os campeões foram a equipe 'Man Java', 
                              seguido pelo 'Read Alert' e o 3º lugar foi da equipe 'Vida que segfault', todos da Ufes Vitoria."
            balloonPosition="right"
            balloonImage={balloons[14]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom16"
          />
          <HistoryBox title="Topcom 18"
            ano={[2020, 2021]}
            image={logos[14]}
            description="O Topcom 18 contou com o patrocínio da Prosperi e da Inflor. Sendo a primeira edição online do evento, 
                              contou com 26 equipes sendo 108 participantes, contando com equipes de fora do estado pela primeira vez! 
                              Os campeões foram a equipe 'Man Java', seguido pelo 'LAM' e o 3º lugar foi da equipe 'TopCão', 
                              todos da Ufes Vitoria."
            balloonPosition="right"
            balloonImage={balloons[16]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom18"
          />
          <div className={styles.fillDiv} />
        </div>
        <div className={styles.line} />
        <div className={styles.contentColumn}>
          <div className={styles.fillDiv} />
          <HistoryBox title="Topcom 3"
            ano={[2004]}
            image={logos[0]}
            description="Obteve proporções bem maiores que as edições anteriores, contando com o patrocínio de diversas instituições e empresas, além do apoio da SBC. 
                              Equipes com estudantes de outras instituições também participaram do torneio. 
                              As linguagens de programação permitidas foram C, C++, Pascal e Java. 
                              A premiação foi composta por medalhas para as 3 melhores equipes, troféu para a instituição da equipe vencedora, 
                              bônus de R$ 360,00 reais em compra de livros para a terceira colocada e a cobertura dos custos de partipação da equipe 
                              vencedora na primeira fase de Maratona de Programação."
            balloonPosition="left"
            balloonImage={balloons[1]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom3"
          />
          <HistoryBox title="Topcom 5"
            ano={[2007]}
            image={logos[2]}
            description="Contando com o patrocínio da FACITEC e o apoio do grupo Suporte (DI-UFES), essa edição obteve o maior número de 
                              partipantes até então, 16 equipes (detalhe importante, em todas as edições o número de vagas sempre se esgotou). 
                              Como premiação, a equipe vencedora ganhou a incrição na primeira fase da Maratona de Programação. Os vencedores do Topcom 
                              também venceram a primeira fase da Maratona e conseguiram a 14 ª posição na fase nacional, 
                              melhor resultado de uma equipe capixaba até então."
            balloonPosition="left"
            balloonImage={balloons[3]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom5"
          />
          <HistoryBox title="Topcom 7"
            ano={[2009]}
            image={logos[4]}
            description="As quatro primeiras equipes foram inscritas para a fase regional da Maratona de Programação, 
                              sendo que duas equipes foram classificadas para a final nacional, ocorrida em Campinas-SP. 
                              As equipes tiveram uma boa participação, obtendo a 32º e a 43º colocação de 51 equipes, destacando o 
                              Espírito Santo com 2 times entre os 51 melhores do Brasil. Os resultados anteriores colocam o município e o 
                              estado em uma posição de destaque no âmbito nacional de programação de computadores."
            balloonPosition="left"
            balloonImage={balloons[5]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom7"
          />
          <HistoryBox title="Topcom 9"
            ano={[2011]}
            image={logos[6]}
            description="Em 2011, 26 equipes inscritas assim como em 2010. Também como no Topcom 8, a edição o evento 
                              foi patrocinado pela empresa ISH Tecnologia. As três melhores equipes foram inscritas na fase regional da 
                              Maratona de Programação, sendo sempre uma delas classificada para a final nacional, realizada em Goiânia-GO (2011). 
                              Uma das equipes ficau em 23º lugar, colocando o Espírito Santo entre as melhores equipes da maratona nacional."
            balloonPosition="left"
            balloonImage={balloons[7]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom9"
          />
          <HistoryBox title="Topcom 11"
            ano={[2013]}
            image={logos[8]}
            description="Contou com o patrocínio da NEXA e da VIXTeam, ambas empresas do Espírito Santo no ramo de tecnologia. 
                              Nesta edição, um resultado inédito: a equipe vencedora foi aquela com integrantes do Ensino Médio, a OBI Team. 
                              Todos os três integrantes da equipe participaram do Introcomp, um projeto do PET Engenharia de Computação destinado 
                              a iniciar estudantes do ensino médio na programação. Como não haviam ingressado no Ensino Superior, 
                              os primeiros colocadas não puderem ser matriculados na Maratona."
            balloonPosition="left"
            balloonImage={balloons[9]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom11"
          />
          <HistoryBox title="Topcom 13"
            ano={[2015]}
            image={logos[9]}
            description="O Topcom 13 contou com o patrocinio da Mogai, VIXTeam e Resultate. Foram 26 equipes no total. 
                              Em primeiro lugar ficou a equipe DoDadalto do IFES, em segundo a equipe Funay deu Rage no guigui da UFES e 
                              em terceiro Lugar equipe TLE da UFES Campus São Mateus."
            balloonPosition="left"
            balloonImage={balloons[11]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom13"
          />
          <HistoryBox title="Topcom 15"
            ano={[2017]}
            image={logos[11]}
            description="Essa edição bateu recode! Contando com o patrocínio da PicPay, Resultate, Vixteam e Primelan, tiveram 34 equipes, 
                              sendo 102 participantes. Os campeões foram a equipe Over9k, da UFES Vitoria, seguido pelo Padrão FIFO, da UFES São Mateus. 
                              E o 3º lugar foi da equipe Francamente, também da UFES Vitoria."
            balloonPosition="left"
            balloonImage={balloons[13]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom15"
          />
          <HistoryBox title="Topcom 17"
            ano={[2019]}
            image={logos[13]}
            description="Essa edição do Topcom, o Topcom 17, teve o patrocínio da PagarMe, Conceptho e Seeds! 
                              Foi um total de 35 equipes, totalizando 105 participantes! Novamente, a equipe vencedora foi a 'Man Java', 
                              seguida de 'Vida que segfault' e 'Commit no Mastes'. Mais uma vez, o top 3 de equipes eram da Ufes Goiabeiras!"
            balloonPosition="left"
            balloonImage={balloons[15]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom17"
          />
          <HistoryBox title="Topcom 19"
            ano={[2022]}
            image={logos[15]}
            description="Na última edição, o Topcom seguiu quebrando recordes históricos, incluindo 62 equipes no formato online, 
                              contando com 489 submissões de códigos no BOCA. O evento foi patrocinado pela Inflor, Alura e Uppersoft. 
                              Novamente foi separada uma categoria para equipes estrangeiras e as equipes campeãs do Espírito Santo foram Man Java em primeiro 
                              lugar,  TopCão em segundo e O Pythaon em terceiro, sendo esta última formada por calouros."
            balloonPosition="left"
            balloonImage={balloons[17]}
            link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom19"
          />

        </div>
      </div>


      <div className={styles.contentMobile}>
        <HistoryBoxMobile title="Topcom 1 e Topcom 2"
          ano={[1997, 1999]}
          description="Participaram 10 equipes formadas por alunos dos cursos de Engenharia e/ou Ciências da Computação. 
                              As linguagens de programação permitidas eram C, Pascal e Modula-2. 
                              A premiação aos vencedores foi o acesso grátis (porém limitado) à internet para cada integrante da equipe vencedora."
        />
        <HistoryBoxMobile title="Topcom 3"
          ano={[2004]}
          image={logos[0]}
          description="Obteve proporções bem maiores que as edições anteriores, contando com o patrocínio de diversas instituições e empresas, além do apoio da SBC. 
                              Equipes com estudantes de outras instituições também participaram do torneio. 
                              As linguagens de programação permitidas foram C, C++, Pascal e Java. 
                              A premiação foi composta por medalhas para as 3 melhores equipes, troféu para a instituição da equipe vencedora, 
                              bônus de R$ 360,00 reais em compra de livros para a terceira colocada e a cobertura dos custos de partipação da equipe 
                              vencedora na primeira fase de Maratona de Programação."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom3"
        />
        <HistoryBoxMobile title="Topcom 4"
          image={logos[1]}
          ano={[2005]}
          description="Apesar de não ter sido um evento de grande porte, marcou o início da periodicidade do torneio, tornando-se um evento anual."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom4"
        />
        <HistoryBoxMobile title="Topcom 5"
          ano={[2007]}
          image={logos[2]}
          description="Contando com o patrocínio da FACITEC e o apoio do grupo Suporte (DI-UFES), essa edição obteve o maior número de 
                              partipantes até então, 16 equipes (detalhe importante, em todas as edições o número de vagas sempre se esgotou). 
                              Como premiação, a equipe vencedora ganhou a incrição na primeira fase da Maratona de Programação. Os vencedores do Topcom 
                              também venceram a primeira fase da Maratona e conseguiram a 14 ª posição na fase nacional, 
                              melhor resultado de uma equipe capixaba até então."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom5"
        />
        <HistoryBoxMobile title="Topcom 6"
          ano={[2008]}
          image={logos[3]}
          description="Contou com a participação de 10 equipes da UFES e 2 da UVV. 
                              Como premiação, as três primeiras equipes tiveram suas inscrições pagas na Maratona de Programação 
                              e a primeira colocada ainda ganhou um bonus de R$ 300,00 na compra de livros científicos. 
                              Ainda nesse ano, o PET também realizou a fase regional da Maratona de Programação na UFES. 
                              Participaram desse evento, 4 equipes da UFES, 2 da FAESA e 2 da UVV. 
                              A equipe NULL, vencedora da fase regional, ficou em 4° lugar na final nacional, conquistando assim, o direito de ir para a final mundial 
                              em Estocolmo na Suécia. Nunca uma equipe da UFES havia se classificado para as finais mundiais!"
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom6"
        />
        <HistoryBoxMobile title="Topcom 7"
          ano={[2009]}
          image={logos[4]}
          description="As quatro primeiras equipes foram inscritas para a fase regional da Maratona de Programação, 
                              sendo que duas equipes foram classificadas para a final nacional, ocorrida em Campinas-SP. 
                              As equipes tiveram uma boa participação, obtendo a 32º e a 43º colocação de 51 equipes, destacando o 
                              Espírito Santo com 2 times entre os 51 melhores do Brasil. Os resultados anteriores colocam o município e o 
                              estado em uma posição de destaque no âmbito nacional de programação de computadores."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom7"
        />
        <HistoryBoxMobile title="Topcom 8"
          ano={[2010]}
          image={logos[5]}
          description="Em 2010 foram 26 equipes inscritas (recorde de participantes). 
                              Na edições o evento foi patrocinado pela empresa ISH Tecnologia. 
                              As três melhores equipes foram inscritas na fase regional da Maratona de Programação, sendo sempre uma delas 
                              classificada para a final nacional, realizada em Joinville-SC. Uma das equipes ficou em 15º lugar, 
                              destacando o Espírito Santo com bons resultados entre as melhores equipes do Brasil."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom8"
        />
        <HistoryBoxMobile title="Topcom 9"
          ano={[2011]}
          image={logos[6]}
          description="Em 2011, 26 equipes inscritas assim como em 2010. Também como no Topcom 8, a edição o evento 
                              foi patrocinado pela empresa ISH Tecnologia. As três melhores equipes foram inscritas na fase regional da 
                              Maratona de Programação, sendo sempre uma delas classificada para a final nacional, realizada em Goiânia-GO (2011). 
                              Uma das equipes ficau em 23º lugar, colocando o Espírito Santo entre as melhores equipes da maratona nacional."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom9"
        />
        <HistoryBoxMobile title="Topcom 10"
          ano={[2012]}
          image={logos[7]}
          description="O Topcom 10, assim como em 2010 e 2011, tiveram 26 equipes inscritas. 
                              Nas três edições o evento (2010, 2011 e 2012) foi patrocinado pela empresa ISH Tecnologia. 
                              As três melhores equipes foram inscritas na fase regional da Maratona de Programação, 
                              sendo sempre uma delas classificada para a final nacional, realizada em 
                              Joinville-SC (2010) e Goiânia-GO (2011 e 2012). As equipes ficaram em 15º, 23º e 30º lugar respectivamente."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom10"
        />
        <HistoryBoxMobile title="Topcom 11"
          ano={[2013]}
          image={logos[8]}
          description="Contou com o patrocínio da NEXA e da VIXTeam, ambas empresas do Espírito Santo no ramo de tecnologia. 
                              Nesta edição, um resultado inédito: a equipe vencedora foi aquela com integrantes do Ensino Médio, a OBI Team. 
                              Todos os três integrantes da equipe participaram do Introcomp, um projeto do PET Engenharia de Computação destinado 
                              a iniciar estudantes do ensino médio na programação. Como não haviam ingressado no Ensino Superior, 
                              os primeiros colocadas não puderem ser matriculados na Maratona."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom11"
        />
        <HistoryBoxMobile title="Topcom 12"
          ano={[2014]}
          description="Contou novamente com o patrocínio da VIXTeam, além do novo apoio da XPD, empresa relativamente nova no ramo 
                              capixaba de tecnologia. Nessa edição participaram 24 equipes, e novamente uma equipe formada por alunos do ensino médio 
                              venceu o torneio. Assim como em 2013, a equipe DoDadalto não pôde ser inscrita na Maratona. 
                              A equipe TLE, formada por alunos do campus de São Matheus, ficou em 31º lugar entre as 58 equipes na final brasileira."
        />
        <HistoryBoxMobile title="Topcom 13"
          ano={[2015]}
          image={logos[9]}
          description="O Topcom 13 contou com o patrocinio da Mogai, VIXTeam e Resultate. Foram 26 equipes no total. 
                              Em primeiro lugar ficou a equipe DoDadalto do IFES, em segundo a equipe Funay deu Rage no guigui da UFES e 
                              em terceiro Lugar equipe TLE da UFES Campus São Mateus."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom13"
        />
        <HistoryBoxMobile title="Topcom 14"
          ano={[2016]}
          image={logos[10]}
          description="O Topcom 14 contou com o patrocínio da VIXTeam e da Resultate. 
                              Foi um dos anos com maior número de participantes entre todas as edições: 33 equipes, 99 competidores. 
                              A equipe TLE da UFES Campus São Mateus ficou em 1º Lugar seguida da equipe No UVA Passa da UFES e a 
                              equipe Triplex do Lula também da UFES em 3º Lugar."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom14"
        />
        <HistoryBoxMobile title="Topcom 15"
          ano={[2017]}
          image={logos[11]}
          description="Essa edição bateu recode! Contando com o patrocínio da PicPay, Resultate, Vixteam e Primelan, tiveram 34 equipes, 
                              sendo 102 participantes. Os campeões foram a equipe Over9k, da UFES Vitoria, seguido pelo Padrão FIFO, da UFES São Mateus. 
                              E o 3º lugar foi da equipe Francamente, também da UFES Vitoria."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom15"
        />
        <HistoryBoxMobile title="Topcom 16"
          ano={[2018]}
          image={logos[12]}
          description="O Topcom 16 contou com o patrocínio da Resultate, Wine e Seeds. Assim como na edição anterior, 
                              tiveram 34 equipes, sendo 102 participantes. Os campeões foram a equipe 'Man Java', 
                              seguido pelo 'Read Alert' e o 3º lugar foi da equipe 'Vida que segfault', todos da Ufes Vitoria."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom16"
        />
        <HistoryBoxMobile title="Topcom 17"
          ano={[2019]}
          image={logos[13]}
          description="Essa edição do Topcom, o Topcom 17, teve o patrocínio da PagarMe, Conceptho e Seeds! 
                              Foi um total de 35 equipes, totalizando 105 participantes! Novamente, a equipe vencedora foi a 'Man Java', 
                              seguida de 'Vida que segfault' e 'Commit no Mastes'. Mais uma vez, o top 3 de equipes eram da Ufes Goiabeiras!"
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom17"
        />
        <HistoryBoxMobile title="Topcom 18"
          ano={[2020, 2021]}
          image={logos[14]}
          description="O Topcom 18 contou com o patrocínio da Prosperi e da Inflor. Sendo a primeira edição online do evento, 
                              contou com 26 equipes sendo 108 participantes, contando com equipes de fora do estado pela primeira vez! 
                              Os campeões foram a equipe 'Man Java', seguido pelo 'LAM' e o 3º lugar foi da equipe 'TopCão', 
                              todos da Ufes Vitoria."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom18"
        />
        <HistoryBoxMobile title="Topcom 19"
          ano={[2022]}
          image={logos[15]}
          description="Na última edição, o Topcom seguiu quebrando recordes históricos, incluindo 62 equipes no formato online, 
                              contando com 489 submissões de códigos no BOCA. O evento foi patrocinado pela Inflor, Alura e Uppersoft. 
                              Novamente foi separada uma categoria para equipes estrangeiras e as equipes campeãs do Espírito Santo foram Man Java em primeiro 
                              lugar,  TopCão em segundo e O Pythaon em terceiro, sendo esta última formada por calouros."
          link="https://www.topcom.pet.inf.ufes.br/edicoes/topcom19"
        />
      </div>


      <div className={styles.logoDiv}>
        <Image src={topcom20} alt="Balão topcom 20" className={styles.logo} />
      </div>

      <ImageBanner variant={2} />

      <Footer />

    </div >
  )
}