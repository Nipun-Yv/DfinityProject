import Debug "mo:base/Debug";
import Float "mo:base/Float";
import List "mo:base/List";
import Array "mo:base/Array";
actor dfinity_reactJs_reactRouter_babel_backend{
    public type Bid={
        organisation:Text;
        bidplaced:Int;
        contactinfo:Text;
    };
    public type WorkOrder={
        id:Int;
        category:Text;
        content:Text;
        startingbid:Int;
        bids:List.List<Bid>;
    };
    public type WorkOrderJSON={
        id:Int;
        category:Text;
        content:Text;
        startingbid:Int;
        bids:[Bid];
    };
    // Making the list of work orders
    stable var workOrders: List.List<WorkOrder> = List.nil<WorkOrder>();
    stable var countWork=1;
    public func addWorkOrder(categ:Text,cont:Text,sbid:Int){
        let newEntry:WorkOrder={
            id=countWork;
            category=categ;
            content=cont;
            startingbid=sbid;
            bids=List.nil<Bid>()
        };
        workOrders:=List.push(newEntry,workOrders);
        countWork+=1;
        Debug.print(debug_show(workOrders));
    };
    public func addBid(s:Nat,org:Text,bp:Int,contact:Text){
        let i=List.size<WorkOrder>(workOrders)-(s+1);
        let newbidplaced:Bid={
            organisation=org;
            bidplaced=bp;
            contactinfo=contact;
        };
        let Notable=List.toArray(workOrders);
        let NotableM=Array.thaw<WorkOrder>(Notable);
        var lstemp=NotableM[i].bids;
        lstemp:=List.push(newbidplaced,lstemp);

        let newUpdatedOrder:WorkOrder={
            id=NotableM[i].id;
            category=NotableM[i].category;
            content=NotableM[i].content;
            startingbid=NotableM[i].startingbid;
            bids=lstemp;
        };
        NotableM[i]:=newUpdatedOrder;
        workOrders:=List.fromVarArray<WorkOrder>(NotableM);
        Debug.print(debug_show(workOrders));
    };
    public func sendItAll():async [WorkOrderJSON]{
        var WO: List.List<WorkOrderJSON> = List.nil<WorkOrderJSON>();
        List.iterate<WorkOrder>(workOrders,func n {
            let newUpdatedOrder:WorkOrderJSON={
            id=n.id;
            category=n.category;
            content=n.content;
            startingbid=n.startingbid;
            bids=List.toArray(n.bids);
        };
        WO:=List.push(newUpdatedOrder,WO);
        });
        return List.toArray(WO);
    };
    public func sendSpecific(s:Nat):async WorkOrderJSON{
        let id=List.size<WorkOrder>(workOrders)-(s+1);
        let arr=List.toArray(workOrders);
        let n=arr[id];
        let newUpdatedOrder:WorkOrderJSON={
            id=n.id;
            category=n.category;
            content=n.content;
            startingbid=n.startingbid;
            bids=List.toArray(n.bids);
        };
        return newUpdatedOrder;
    }
}