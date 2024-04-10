# SVOLGIMENTO
In una cartella a parte create il cronometro che mostra secondi e minuti.
Inserite un bottone per avviare il cronometro, un'altro bottone per stoppare il cronometro e un'altro bottone ancora per resettare il cronometro.

## INPUT

1. creo foglio html
2. creo due tag span rispettivamente con id "minuti" e "secondi" con valore 0
3. creo due bottoni rispettivamente con id "start" e "stop"
    - il primo non avra nessuna classe
    - al secondo gli do una classe disabled alla quale il pulsante non potra essere cliccato
4. creo foglio javascript
5. creo le variabili secondi e minuti inizializzate a "0";
6. creo due variabili a cui collego i 2 bottoni
## LOGIC

7. quando premo sul bottone start
    - aggiungo classe disabled al bottone start
    - rimuovo classe disabled al bottone stop
    -creo una variabile per salvare setIntervale la associo.
    - avvio seInterval con 1 iterazione ogni 1000 millisecondi
        - incremento la variabile secondi
        se secondi non è minore uguale a 59
            -  variabile secondi diventa "0"
            -  variabile minuti viene incrementata
            se la variavbile minuti non è minore uguale a 59
                - utilizzo la variabile associata a setInterval per stoppare il timer
                - do un messaggio che è passata gia un ora
## OUTPUT
        creo variabile StrSecondi
        creo variabile StrMinuti
        se secondi <= 9
            concateno "0" al valore dei secondi
        altrimenti
            strSecondi = secondi
        se minuti <= 9
            concateno "0" al valore dei minuti
        altrimenti
            strMinuti = minuti 
        salvo negli elemtni html "secondi" e "minuti" il valore delle variabili "strSecondi" e "strMinuti" 


