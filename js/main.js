 let sum = 0;
    let h2 = document.getElementById("result");
    h2.innerText = sum;
    let input1 = document.getElementById("num1");
    let p = document.getElementsByTagName("p")[0];
    let p2 = document.getElementsByTagName("p")[1];
    let addBtn = document.getElementById('addBtn');
    let app = document.getElementById('app');
    let appTitle = document.getElementById('appTitle');
    
    function add(){
        sum += Number(input1.value);
        h2.innerText = sum;  
        input1.value = "";
        if (sum%2){
            p.innerText="odd number";
            p.style.color="red";
        }else{
            p.innerText="even number";
            p.style.color="blue";
        }
        if (isPrime(sum)){
            p2.innerText = sum + " is a prime number";
            p2.style.color = "green";
        } else {
            p2.innerText = sum + " is not a prime number";
            p2.style.color = "gray";
        }
        
    }

    function styleElements(){
        // Reapply inline styles (except font sizes) so CSS can handle responsive font sizing

        // page layout
        document.body.style.margin = '0';
        document.body.style.fontFamily = '"Segoe UI", Roboto, Arial, sans-serif';
        document.body.style.background = '#f4f6f8';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.padding = '24px';
        document.body.style.boxSizing = 'border-box';

    // app container (visuals only; width handled by CSS)
    app.style.background = '#ffffff';
    app.style.padding = '28px';
    app.style.borderRadius = '12px';
    app.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.08)';
    app.style.textAlign = 'center';
    app.style.boxSizing = 'border-box';

    // input (visuals only; width handled by CSS)
    input1.style.padding = '10px 12px';
    input1.style.border = '1px solid #e2e8f0';
    input1.style.borderRadius = '8px';
    input1.style.marginRight = '10px';
    input1.style.boxSizing = 'border-box';

        // button
        addBtn.style.padding = '10px 14px';
        addBtn.style.borderRadius = '8px';
        addBtn.style.border = 'none';
        addBtn.style.background = '#2563eb';
        addBtn.style.color = '#fff';
        addBtn.style.cursor = 'pointer';
        addBtn.style.boxShadow = '0 6px 14px rgba(37,99,235,0.18)';

        // simple hover effect for the button
        addBtn.addEventListener('mouseenter', () => {
            addBtn.style.transform = 'translateY(-1px)';
            addBtn.style.opacity = '0.95';
        });
        addBtn.addEventListener('mouseleave', () => {
            addBtn.style.transform = 'translateY(0)';
            addBtn.style.opacity = '1';
        });

        // result margins and colors (no font sizes)
        h2.style.margin = '18px 0 8px';
        h2.style.color = '#0f172a';

        p.style.margin = '6px 0';
        p2.style.margin = '4px 0 0';
        p2.style.color = '#6b7280';

        // title styling (no font-size changed here to avoid conflict with CSS)
            appTitle.style.marginTop = '28px';
            appTitle.style.marginBottom = '20px';
            appTitle.style.fontWeight = '700';
            appTitle.style.fontFamily = '"Segoe UI", "Helvetica Neue", Arial, sans-serif';
            appTitle.style.color = 'rgb(14 66 139)';
            appTitle.style.textAlign = 'center';
            appTitle.style.letterSpacing = '0.2px';
            appTitle.style.lineHeight = '1.2';
            appTitle.style.maxWidth = '820px';
            appTitle.style.padding = '0 12px';
        

        // focus styles for input (improve accessibility)
        input1.addEventListener('focus', () => {
            input1.style.outline = '3px solid rgba(37,99,235,0.12)';
            input1.style.borderColor = '#93c5fd';
        });
        input1.addEventListener('blur', () => {
            input1.style.outline = 'none';
            input1.style.borderColor = '#e2e8f0';
        });
    }

    styleElements();

    input1.addEventListener('keydown', (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            add();
        }
    });

    function isPrime(n){
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i < n; i += 2){
            if (n % i === 0) return false;
        }
        return true;
    }