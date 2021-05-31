import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'https://solomonedwards.com/wp-content/uploads/2017/04/Banking-Slider.jpg',
    thumbImage: 'https://solomonedwards.com/wp-content/uploads/2017/04/Banking-Slider.jpg',
    title: 'Virtual Banking'
    },
    {
      image:'https://relocate.leeds.ac.uk/wp-content/uploads/2014/10/Banking-Slider.jpg',
      thumbImage:'https://relocate.leeds.ac.uk/wp-content/uploads/2014/10/Banking-Slider.jpg',
      title: 'Payment Banking'
    },
    {
      image:'https://lh3.googleusercontent.com/proxy/mpz7r5MkLIQAPZg2kckUzgwUdxgm2vTW0AhHCfsbWyOMzGAS4xE4HEhf_tSSNfzKaTOYuyWdfvvBA3KbpI_RjKSA5n7eeXr5vAw',
      thumbImage:'https://lh3.googleusercontent.com/proxy/mpz7r5MkLIQAPZg2kckUzgwUdxgm2vTW0AhHCfsbWyOMzGAS4xE4HEhf_tSSNfzKaTOYuyWdfvvBA3KbpI_RjKSA5n7eeXr5vAw',
      title: 'Mobile Banking'
    },
    {
      image:'https://www.cornerstonestatebank.com/application/files/6514/8529/1649/slider-online-banking4.jpg',
      thumbImage:'https://www.cornerstonestatebank.com/application/files/6514/8529/1649/slider-online-banking4.jpg',
      title: 'Online Banking'
    },
    {
      image:'https://lh3.googleusercontent.com/proxy/2L3T4gpl7Xt2dNMRa9zVVJTu1AF56ZkSZtI9JDjkUw5FZwb_uOMo8C7nMXNI8pptwyyhT2rq4W4EPr9ZUuRbDiInLnWQC4zC98jZVzXTU7rpCq2B',
      thumbImage:'https://lh3.googleusercontent.com/proxy/2L3T4gpl7Xt2dNMRa9zVVJTu1AF56ZkSZtI9JDjkUw5FZwb_uOMo8C7nMXNI8pptwyyhT2rq4W4EPr9ZUuRbDiInLnWQC4zC98jZVzXTU7rpCq2B',
      title: 'Saving Plans'
    }
    
  ];

}
