import {Contact} from './contactclass'
export class ContactService
{   
    
    contactser:ContactService
    contactlist:Contact[];
    contactSearch:Contact[];
    constructor()
    {
      this.contactlist=[];
      this.contactSearch=[];
      var contact2, contact3, contact4;
      contact2=new Contact();
      contact2.firstName="Rishita";
      contact2.lastName="Kotiyal";
      contact2.phone=123456789;
      contact3=new Contact();
      contact3.firstName="John";
      contact3.lastName="Truedo";
      contact3.phone=+123232728;
      contact4=new Contact();
      contact4.firstName="Mikkel";
      contact4.lastName="Nielson";
      contact4.phone=+129875628;
      this.contactlist.push(contact2);
      this.contactlist.push(contact3);
      this.contactlist.push(contact4);


    }
    
    addcontact(somecontanct:Contact):Contact[]
    {   
        this.contactlist.push(somecontanct);
        return this.contactlist;
    }

    returncontactlist():Contact[]
    {
        return this.contactlist;
    }

    delete(num:Contact):Contact[]
    {         
        for(let index=0; index<this.contactlist.length;index++)
        {
            if(num.phone==this.contactlist[index].phone)
            {   
                const i=index;
                this.contactlist.splice(i,1);
                break;
            }
        }
        return this.contactlist;
    }

updatetocontact(c:Contact):Contact[]
{
    for(let index =0; index<this.contactlist.length; index++)
    {
        if(c.firstName==this.contactlist[index].firstName ||c.lastName==this.contactlist[index].lastName|| c.phone==this.contactlist[index].phone)
        {
            this.contactlist[index].firstName=c.firstName;
            this.contactlist[index].lastName=c.lastName;
            this.contactlist[index].phone=c.phone;
            break;
        }
        else
        {
         this.contactser.addcontact(c);   
        }

    }

    return this.contactlist;
}

sortarray(sortDesc:boolean):Contact[]
{   if(sortDesc==false)
    {
    this.contactlist=this.contactlist.sort((obj1, obj2) => {
      if (obj1.firstName > obj2.firstName) {
          return 1;
      }
  
      else if (obj1.firstName < obj2.firstName) {
          return -1;
      }
      else if(obj1.firstName==obj2.firstName)
      {
          if(obj1.lastName>obj2.firstName)
          {
              return 1;
          }
          else if(obj1.firstName<obj2.lastName)
          {
              return -1;
          }
      }
  
      return 0;
  });
    }
    else if(sortDesc==true)
    {
        this.contactlist=this.contactlist.sort((obj1, obj2) => {
            if (obj1.firstName > obj2.firstName) {
                return -1;
            }
        
            else if (obj1.firstName < obj2.firstName) {
                return 1;
            }
            else if(obj1.firstName==obj2.firstName)
            {
                if(obj1.lastName>obj2.firstName)
                {
                    return -1;
                }
                else if(obj1.firstName<obj2.lastName)
                {
                    return 1;
                }
            }
        
            return 0;
    });
}
  return this.contactlist;
}

searchcontacts(searchterm:string):Contact[]
{   
    if(searchterm=="")
    {
        return this.contactlist;
    }
    else
    {   this.contactSearch=[];

        for(let index=0; index<this.contactlist.length;index++)
        {
            if(searchterm.toLowerCase()==this.contactlist[index].firstName.toLowerCase() || searchterm.toLowerCase()==this.contactlist[index].lastName.toLowerCase() || searchterm==this.contactlist[index].phone.toString() )
            {
                this.contactSearch.push(this.contactlist[index]);
            }
        }
        return this.contactSearch;
    }
 
}

}