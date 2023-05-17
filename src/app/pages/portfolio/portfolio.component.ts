import { Component } from '@angular/core';
import { Portfolio, Portfolios } from '../../models/portfolios';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  private portfolios: Portfolios = {
    list: [
      {
        name: "How NOT to use Scrum",
        description: "Reglas básicas de aplicación de SCRUM",
        languages: ["Spanish"],
        image: "https://media.licdn.com/dms/image/v2/D4D12AQGPtsQl-unLkQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1721199239507?e=2147483647&v=beta&t=eh8Nj53grVlzkktsFC8Z48UJIWS3tLaW9GwLkKdi3CE",
        link: "https://www.linkedin.com/pulse/como-usar-scrum-jose-miguel-p%C3%A9rez-ganado-ridvf",
        tags: ["Scrum" ]
      },
      {
        name: "Microservices Orchestration",
        description: "Description 2",
        languages: ["Spanish"],
        image: "https://media.licdn.com/dms/image/v2/D4D12AQGUoyIiPJVVeg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1716274267714?e=2147483647&v=beta&t=TTrc9YTT9q_ZVsEbTQfcrzglhS0Qwlkm1peAfarsgmI", 
        link: "https://www.linkedin.com/pulse/orquestaci%C3%B3n-de-microservicios-jose-miguel-p%C3%A9rez-ganado-rj2ef",
        tags: ["Microservices"]
      },
      {
        name: "Software Testing: Quality and Stability",
        description: "Description 3",
        languages: ["Spanish"],
        image: "https://media.licdn.com/dms/image/v2/D4D12AQGbLu7IK31ZZQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714640324354?e=2147483647&v=beta&t=H6CpInkMH6JAS__NoZdHRrEY7uedg_Zji4MpWQlva2g",
        link: "https://www.linkedin.com/pulse/pruebas-de-software-garantizando-calidad-y-jose-miguel-p%C3%A9rez-ganado-lktaf",
        tags: ["Testing"]
      },
      {
        name: "Innovation is not always the best option",
        description: "Description 4",
        languages: ["Spanish"],
        image: "https://media.licdn.com/dms/image/v2/D4D12AQEKQC4VK9noZQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710323490986?e=1760572800&v=beta&t=KTcVQmjVOkCYYOi0FLVhIpP1YnKQoUSsbLlJ7t1wOhM",
        link: "https://www.linkedin.com/pulse/la-innovaci%C3%B3n-siempre-es-mejor-opci%C3%B3n-jose-miguel-p%C3%A9rez-ganado-dntef",
        tags: ["I+D"]
      },
      {
        name: "Orchestration and Synchronization in the Digital Age",
        description: "Description 5",
        languages: ["Spanish"],
        image: "https://media.licdn.com/dms/image/v2/D4D12AQG8nS7a7_1lYA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713792116870?e=1760572800&v=beta&t=ni6swS5wGT1gokiz9cgx6NszNzYxo0WzW9a1kdjsZbs",
        link: "https://www.linkedin.com/pulse/microservicios-orquestaci%C3%B3n-y-sincronizaci%C3%B3n-en-la-era-p%C3%A9rez-ganado-znlkf",
        tags: ["Microservices"]
      },
    ]
  };
  _portfolios: Portfolio[] = this.portfolios.list;
  tags: string[] = ["All", ...new Set(this.portfolios.list.flatMap(portfolio => portfolio.tags))];
  selectedTag: string = "All";

  selectTag(tag: string) {
    this.selectedTag = tag;
    this._portfolios = this.portfolios.list.filter(portfolio => {
      return portfolio.tags.includes(this.selectedTag) || this.selectedTag === "All";
    });
  }

}
