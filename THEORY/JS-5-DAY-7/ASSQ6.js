let customer = [
  {
      name: 'james',
      email: 'james@example.com',
      phone: '+91-123-456-7890',
      no_of_times_shopped: 2,
      purchase_history: [
          {
              date_of_purchase: '01/07/2022',
              item_purchase: [
                  {
                      product_name: 'Samsung Galaxy Y',
                      product_price: 12000
                  },
                  {
                      product_name: 'Mixer',
                      product_price: 4000
                  },
              ]
          },
          {
              date_of_purchase: '30/06/2022',
              item_purchase: [
                  {
                      product_name: 'Jeans',
                      product_price: 1200
                  }
              ]
          }
      ],
 
      totalPurchaseAmount:function(){
          let sum = 0;
          for(let i=0;i<this.purchase_history.length;i++){
              for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                  sum = sum + this.purchase_history[i].item_purchase[j].product_price;
              }
          }
          return sum;
      }
  },
  {
      name: 'Akash',
      email: 'akash@mail.com',
      phone: '+91-596-589-6359',
      no_of_times_shopped: 5,
      purchase_history: [
          {
              date_of_purchase: '21/08/2022',
              item_purchase: [
                  {
                      product_name: 'a',
                      product_price: 56
                  },
                  {
                      product_name: 'b',
                      product_price: 96
                  },
              ]
          },
          {
              date_of_purchase: '08/01/2022',
              item_purchase: [
                  {
                      product_name: 'c',
                      product_price: 1000
                  }
              ]
          },
          {
              date_of_purchase: '02/04/2022',
              item_purchase: [
                  {
                      product_name: 'd',
                      product_price: 456
                  },
                  {
                      product_name: 'e',
                      product_price: 845
                  },
              ]
          },
          {
              date_of_purchase: '15/05/2022',
              item_purchase: [
                  {
                      product_name: 'f',
                      product_price: 200
                  }
              ]
          },
          {
              date_of_purchase: '14/08/2022',
              item_purchase: [
                  {
                      product_name: 'g',
                      product_price: 2000
                  }
              ]
          }
      ],
      totalPurchaseAmount:function(){
          let sum = 0;
          for(let i=0;i<this.purchase_history.length;i++){
              for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                  sum = sum + this.purchase_history[i].item_purchase[j].product_price;
              }
          }
          return sum;
      }
  },
  {
      name: 'sanatan',
      email: 'sanatan@mail.com',
      phone: '+91-569-693-5699',
      no_of_times_shopped: 3,
      purchase_history: [
          {
              date_of_purchase: '08/09/2021',
              item_purchase: [
                  {
                      product_name: 'xya',
                      product_price: 21000
                  }
              ]
          },
          {
              date_of_purchase: '05/07/2022',
              item_purchase: [
                  {
                      product_name: 'fasd',
                      product_price: 15000
                  }
              ]
          },
          {
              date_of_purchase: '13/08/2022',
              item_purchase: [
                  {
                      product_name: 'fadf',
                      product_price: 6000
                  }
              ]
          }
      ],
      totalPurchaseAmount:function(){
          let sum = 0;
          for(let i=0;i<this.purchase_history.length;i++){
              for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                  sum = sum + this.purchase_history[i].item_purchase[j].product_price;
              }
          }
          return sum;
      }
  },
  {
      name: 'sribatsha',
      email: 'sribatsha@mail.com',
      phone: '+91-795-444-7777',
      no_of_times_shopped: 2,
      purchase_history: [
          {
              date_of_purchase: '02/08/2022',
              item_purchase: [
                  {
                      product_name: 'xkpokp',
                      product_price: 22000
                  },
                  {
                      product_name: 'yiouyiuo',
                      product_price: 23000
                  },
              ]
          },
          {
              date_of_purchase: '30/09/2022',
              item_purchase: [
                  {
                      product_name: 'oiupp',
                      product_price: 1200
                  }
              ]
          }
      ],
      totalPurchaseAmount:function(){
          let sum = 0;
          for(let i=0;i<this.purchase_history.length;i++){
              for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                  sum = sum + this.purchase_history[i].item_purchase[j].product_price;
              }
          }
          return sum;
      }
  },
  {
      name: 'hrus',
      email: 'hrus@mail.com',
      phone: '+91-999-568-9635',
      no_of_times_shopped: 6,
      purchase_history: [
          {
              date_of_purchase: '11/07/2022',
              item_purchase: [
                  {
                      product_name: 'ewyer',
                      product_price: 3500
                  },
                  {
                      product_name: 'jgjg',
                      product_price: 2000
                  },
              ]
          },
          {
              date_of_purchase: '05/07/2022',
              item_purchase: [
                  {
                      product_name: 'qwer',
                      product_price: 8000
                  }
              ]
          },
          {
              date_of_purchase: '04/07/2022',
              item_purchase: [
                  {
                      product_name: 'lkju',
                      product_price: 4000
                  },
                  {
                      product_name: 'hnkjh',
                      product_price: 25000
                  },
              ]
          },
          {
              date_of_purchase: '30/06/2022',
              item_purchase: [
                  {
                      product_name: 'sdfs',
                      product_price: 80000
                  }
              ]
          },
          {
              date_of_purchase: '30/06/2022',
              item_purchase: [
                  {
                      product_name: 'gdfg',
                      product_price: 1200
                  }
              ]
          },
          {
              date_of_purchase: '26/06/2022',
              item_purchase: [
                  {
                      product_name: 'qwhtyek',
                      product_price: 2000
                  }
              ]
          }
      ],
      totalPurchaseAmount:function(){
          let sum = 0;
          for(let i=0;i<this.purchase_history.length;i++){
              for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                  sum = sum + this.purchase_history[i].item_purchase[j].product_price;
              }
          }
          return sum;
      }
  }
  ];
  
  console.log(`Customer Details`);
  console.log('\n');
      for (let i = 0; i < customer.length; i++) {
        console.log(`Name of the customer : ${customer[i].name}`);
        console.log(`Email  of the customer: ${customer[i].email}`);
        console.log(`Phone  of the customer: ${customer[i].phone}`);
        for (let j = 0; j < customer[i].purchase_history.length; j++) {
              console.log(`purchase date : ${customer[i].purchase_history[j].date_of_purchase}`);
              for (let k = 0; k < customer[i].purchase_history[j].item_purchase.length; k++) {
              console.log(`purchase name : ${customer[i].purchase_history[j].item_purchase[k].product_name}`);
              console.log(`product price : ${customer[i].purchase_history[j].item_purchase[k].product_price}`);
              }
        }
        console.log('\n');
  
  }
  
  console.log(`Name of customer who has shopped more than 5 times : `);
  customer.filter(item=>(item.no_of_times_shopped>5));
  customer.forEach(value=>{
      console.log(value.name);
  })
  
  console.log('\n');
  
  console.log(`The name and total purchase amount all the shopping a customer did : `);
  customer.forEach(value=>{
      console.log(`${value.name}-${value.totalPurchaseAmount()}`);
  })